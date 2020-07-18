const { POSITION } = require('../config/constant');

const {
  WORSHIPLEADER, SINGER, KEYBOARD, BASS, DRUM, MULTIMEDIA, CAMERA
} = POSITION;

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('PropheticMemberSchedule', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    prophetic_member_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'PropheticMember',
        key: 'id'
      }
    },
    assigned_date: Sequelize.DATE,
    assigned_position: Sequelize.ENUM(
      WORSHIPLEADER,
      SINGER,
      KEYBOARD,
      BASS,
      DRUM,
      MULTIMEDIA,
      CAMERA
    ),
    created_at: Sequelize.DATE,
    updated_at: Sequelize.DATE
  }),

  down: (queryInterface) => queryInterface.dropTable('PropheticMemberSchedule')
};
