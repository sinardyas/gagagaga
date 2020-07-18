const moment = require('moment');

const { PropheticMember, PropheticMemberPosition } = require('./models');
const { POSITION, POPULATION_NUMBER } = require('./config/constant');

const { WORSHIPLEADER, SINGER, KEYBOARD, BASS, DRUM, MULTIMEDIA, CAMERA } = POSITION;
const date = ['5', '12', '19', '26'];
const worshipHours = ['7', '9', '11', '5'];

const getBinaryNumber = number => ('00000000' + number.toString(2)).slice(-8);

/**
 * getRandomNumber function
 * used to get a random number with max number and min number
 * @param {number} max 
 * @param {number} min 
 */

const getRandomNumber = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * getSundayDatePerMonth function
 * used to get all date for sunday in a month
 */

const getSundayDatePerMonth = () => {
  const dates = [];
  let monday = moment().startOf('month').day('Sunday');
  if (monday.date() > 7) monday.add(7, 'd');
  let month = monday.month();
  while (month === monday.month()){
    dates.push(monday.date());
    monday.add(7, 'd');
  }
  return dates;
}

/**
 * getTeamData function
 * used to get all Prophetic Member data from database
 * 
 * @param {string} position 
 */

const getTeamData = async (position) => {
  try {
    const teamData = [];
    const { rows } = await PropheticMember.findAndCountAll({
      include: [{
        model: PropheticMemberPosition,
        as: 'detail',
        where: { position }
      }],
      attributes: ['id', 'first_name', 'last_name'],
      raw: true
    });

    rows.forEach(data => teamData.push(data));
    return teamData;
  } catch (error) {
    throw error;
  }
};

/** 
 * generatePopulation function
 * used to generate population with random value for each individu
 * based on data in database
 * will return array of population
 * 
 * 1 month = 4 schedule
 * 1 schedule = 3 worship
*/

const generatePopulation = async () => {
  const multimediaTeam = await getTeamData(MULTIMEDIA);
  const cameraTeam = await getTeamData(CAMERA);
  const worshipLeaderTeam = await getTeamData(WORSHIPLEADER);
  const singerTeam = await getTeamData(SINGER);
  const drummerTeam = await getTeamData(DRUM);
  const keyboardistTeam = await getTeamData(KEYBOARD);
  const bassistTeam = await getTeamData(BASS);

  const sundayDate = getSundayDatePerMonth();

  let monthSchedule = [];
  let weekSchedule = [];
  let daySchedule = [];
  let population = [];

  let propheticMemberList = {};

  for (let populationNumber = 1; populationNumber <= POPULATION_NUMBER; populationNumber += 1) {
    for (let week = 1; week <= sundayDate.length; week += 1) { 
      for (let worshipHour = 1; worshipHour <= 3; worshipHour += 1) {
        let multimedia = multimediaTeam[getRandomNumber((multimediaTeam.length - 1), 0)];
        let camera = cameraTeam[getRandomNumber((cameraTeam.length - 1), 0)];
        let worshipLeader = worshipLeaderTeam[getRandomNumber((worshipLeaderTeam.length - 1), 0)];
        let singerOne = singerTeam[getRandomNumber((singerTeam.length - 1), 0)];
        let singerTwo = singerTeam[getRandomNumber((singerTeam.length - 1), 0)];
        let drummer = worshipHour > 1 ? drummerTeam[getRandomNumber((drummerTeam.length - 1), 0)] : [];
        let bassist = worshipHour > 1 ? bassistTeam[getRandomNumber((bassistTeam.length - 1), 0)] : [];
        let keyboardist = keyboardistTeam[getRandomNumber((keyboardistTeam.length - 1), 0)];

        daySchedule.push(multimedia);
        daySchedule.push(camera);
        daySchedule.push(worshipLeader);
        daySchedule.push(singerOne);
        daySchedule.push(singerTwo);
        daySchedule.push(drummer);
        daySchedule.push(bassist);
        daySchedule.push(keyboardist);

        weekSchedule.push(daySchedule);
        propheticMemberList = {};
        daySchedule = [];
      }
      monthSchedule.push({ date: sundayDate[week-1], member: weekSchedule });
      weekSchedule = [];
    }
    population.push(monthSchedule);
    monthSchedule = [];
  }

  return population;
}

(async function() {
  const population = await generatePopulation();
  const moreThanOnePositionPenalty = 1;
  let penaltyTotal = 0;
  let totalPosition = 0;

  population.forEach((data, idx) => {
    console.info(`Population: ${idx + 1}\n`);
    /**
     * month level
     */
    for (let i = 0; i < data.length; i += 1) {
      console.info(`Date: ${data[i].date}\n`);
      /**
       * week level
       */
      for (let j = 0; j < data[i].member.length; j += 1) {
        console.info(`KC: ${j + 1}`);
        /**
         * day level
         */
        let multimediaPosition = data[i].member[j][0].first_name;
        let documentationPosition = data[i].member[j][1].first_name;
        let worshipLeaderPosition = data[i].member[j][2].first_name;
        let singerIPosition = data[i].member[j][3].first_name;
        let singerIIPosition = data[i].member[j][4].first_name;
        let drummerPosition = data[i].member[j][5].first_name;
        let bassistPosition = data[i].member[j][6].first_name;
        let keyboardistPosition = data[i].member[j][7].first_name;

        console.info(multimediaPosition);
        console.info(documentationPosition);
        console.info(worshipLeaderPosition);
        console.info(singerIPosition);
        console.info(singerIIPosition);
        console.info(drummerPosition);
        console.info(bassistPosition);
        console.info(keyboardistPosition);

        totalPosition = data[i].member[j].filter(temp => (temp.first_name == multimediaPosition)).length;
        if (totalPosition > 1) penaltyTotal += moreThanOnePositionPenalty;
        totalPosition = data[i].member[j].filter(temp => (temp.first_name == documentationPosition)).length;
        if (totalPosition > 1) penaltyTotal += moreThanOnePositionPenalty;
        totalPosition = data[i].member[j].filter(temp => (temp.first_name == worshipLeaderPosition)).length;
        if (totalPosition > 1) penaltyTotal += moreThanOnePositionPenalty;
        totalPosition = data[i].member[j].filter(temp => (temp.first_name == singerIPosition)).length;
        if (totalPosition > 1) penaltyTotal += moreThanOnePositionPenalty;
        totalPosition = data[i].member[j].filter(temp => (temp.first_name == singerIIPosition)).length;
        if (totalPosition > 1) penaltyTotal += moreThanOnePositionPenalty;
        if (drummerPosition && bassistPosition) {
          totalPosition = data[i].member[j].filter(temp => (temp && (temp.first_name == drummerPosition))).length;
          if (totalPosition > 1) penaltyTotal += moreThanOnePositionPenalty;
          totalPosition = data[i].member[j].filter(temp => (temp && (temp.first_name == bassistPosition))).length;
          if (totalPosition > 1) penaltyTotal += moreThanOnePositionPenalty;
        }
        totalPosition = data[i].member[j].filter(temp => (temp.first_name == keyboardistPosition)).length;
        if (totalPosition > 1) penaltyTotal += moreThanOnePositionPenalty;

        console.info(`  penaltyTotal : ${penaltyTotal}`);
      }
      console.info('\n~~~~~~~~~~~~~~~~~~~~~\n');
    }
  });
})();
