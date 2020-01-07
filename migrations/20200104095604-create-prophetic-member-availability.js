module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('PropheticMemberAvailablity', {
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
    available_date: Sequelize.DATE,
    created_at: Sequelize.DATE,
    updated_at: Sequelize.DATE,
  }),

  down: queryInterface => queryInterface.dropTable('PropheticMemberAvailablity'),
};
