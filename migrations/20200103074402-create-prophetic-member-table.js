const { GENDER, STATUS, ROLE } = require('../config/constant');
const { PRIA, WANITA } = GENDER;
const { ACTIVE, INACTIVE, OFF } = STATUS;
const { ADMIN, USER } = ROLE;

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('PropheticMember', {
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
    password: Sequelize.STRING,
    email: Sequelize.STRING,
    role: Sequelize.ENUM(ADMIN, USER),
    status: Sequelize.ENUM(ACTIVE, INACTIVE, OFF),
    created_at: Sequelize.DATE,
    updated_at: Sequelize.DATE,
  }),

  down: queryInterface => queryInterface.dropTable('PropheticMember'),
};
