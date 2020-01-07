const Sequelize = require('sequelize');

const database = 'prophetic_team_scheduler_dev';
const username = 'root';
const password = 'helloworld';
const host = '127.0.0.1';
const port = '3306';
const dialect = 'mysql';

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
      idle: 10000,
    },
    dialectOptions: { decimalNumbers: true },
  }
);

module.exports = sequelize;