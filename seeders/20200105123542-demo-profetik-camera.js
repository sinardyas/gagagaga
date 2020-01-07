
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('PropheticMemberPosition', [{
    prophetic_member_id: 1,
    position: 'CAMERA',
    created_at: new Date(),
    updated_at: new Date()
  }, {
    prophetic_member_id: 2,
    position: 'CAMERA',
    created_at: new Date(),
    updated_at: new Date()
  }, {
    prophetic_member_id: 3,
    position: 'CAMERA',
    created_at: new Date(),
    updated_at: new Date()
  }, {
    prophetic_member_id: 11,
    position: 'CAMERA',
    created_at: new Date(),
    updated_at: new Date()
  }, {
    prophetic_member_id: 12,
    position: 'CAMERA',
    created_at: new Date(),
    updated_at: new Date()
  }], {}),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('PropheticMemberPosition', null, {})
};
