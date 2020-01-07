const Sequelize = require('sequelize');
const db = require('../config/database');
const { POSITION } = require('../config/constant');

const { WORSHIPLEADER, SINGER, KEYBOARD, BASS, DRUM, MULTIMEDIA, CAMERA } = POSITION;

const PropheticMemberPosition = db.define('PropheticMemberPosition', {
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
  position: Sequelize.ENUM(WORSHIPLEADER, SINGER, KEYBOARD, BASS, DRUM, MULTIMEDIA, CAMERA),
  created_at: Sequelize.DATE,
  updated_at: Sequelize.DATE,
}, {
  modelName: 'PropheticMemberPosition',
  timestamps: true,
  tableName: 'PropheticMemberPosition',
  underscored: true
});

module.exports = PropheticMemberPosition;
