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
        let drummer;
        let bassist;
        if (worshipHour > 1) {
          drummer = drummerTeam[getRandomNumber((drummerTeam.length - 1), 0)];
          bassist = bassistTeam[getRandomNumber((bassistTeam.length - 1), 0)];
        }
        let keyboardist = keyboardistTeam[getRandomNumber((keyboardistTeam.length - 1), 0)];

        daySchedule.push(multimedia);
        daySchedule.push(camera);
        daySchedule.push(worshipLeader);
        daySchedule.push(singerOne);
        daySchedule.push(singerTwo);
        if (worshipHour > 1) {
          daySchedule.push(drummer);
          daySchedule.push(bassist);
        }
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

  population.forEach((data, idx) => {
    console.info(`Population: ${idx + 1}\n`);
    for (let i = 0; i < data.length; i += 1) {
      console.info(`Date: ${data[i].date}\n`);
      for (let j = 0; j < data[i].member.length; j += 1) {
        console.info(`KC: ${j + 1}`);
        for (let k = 0; k < data[i].member[j].length; k += 1) {
          console.info(`  ${data[i].member[j][k]['detail.position']}: ${data[i].member[j][k].first_name}`);
        }
      }
      console.info('\n~~~~~~~~~~~~~~~~~~~~~\n');
    }
  });
})();
