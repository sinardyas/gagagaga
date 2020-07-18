const Sequelize = require('sequelize');

const database = '';
const username = '';
const password = '';
const host = '';
const port = '';
const dialect = '';

const sequelize = new Sequelize(
  database,
  username,
  password,
  {
    host,
    port,
    dialect,
    operatorsAliases: Sequelize.Op,
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    dialectOptions: { decimalNumbers: true }
  }
);

module.exports = sequelize;
