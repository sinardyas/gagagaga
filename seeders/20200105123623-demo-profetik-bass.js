
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('PropheticMemberPosition', [{
    prophetic_member_id: 20,
    position: 'BASS',
    created_at: new Date(),
    updated_at: new Date()
  }, {
    prophetic_member_id: 29,
    position: 'BASS',
    created_at: new Date(),
    updated_at: new Date()
  }, {
    prophetic_member_id: 30,
    position: 'BASS',
    created_at: new Date(),
    updated_at: new Date()
  }, {
    prophetic_member_id: 31,
    position: 'BASS',
    created_at: new Date(),
    updated_at: new Date()
  }], {}),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('PropheticMemberPosition', null, {})
};
