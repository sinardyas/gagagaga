
module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('PropheticMemberPosition', [{
    prophetic_member_id: 20,
    position: 'BASS',
    created_at: new Date(),
    updated_at: new Date()
  }, {
    prophetic_member_id: 30,
    position: 'KEYBOARD',
    created_at: new Date(),
    updated_at: new Date()
  }, {
    prophetic_member_id: 32,
    position: 'KEYBOARD',
    created_at: new Date(),
    updated_at: new Date()
  }], {}),
  down: (queryInterface) => queryInterface.bulkDelete('PropheticMemberPosition', null, {})
};
