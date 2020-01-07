const Sequelize = require('sequelize');
const db = require('../config/database');
const { GENDER, STATUS } = require('../config/constant');

const { PRIA, WANITA } = GENDER;
const { ACTIVE, INACTIVE, OFF } = STATUS;

const PropheticMember = db.define('PropheticMember', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  gender: Sequelize.ENUM(PRIA, WANITA),
  phone_number: Sequelize.STRING,
  status: Sequelize.ENUM(ACTIVE, INACTIVE, OFF),
  created_at: Sequelize.DATE,
  updated_at: Sequelize.DATE,
}, {
  modelName: 'PropheticMember',
  timestamps: true,
  tableName: 'PropheticMember',
  underscored: true
});

module.exports = PropheticMember;
