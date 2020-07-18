
module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('PropheticMemberPosition', [{
    prophetic_member_id: 20,
    position: 'DRUM',
    created_at: new Date(),
    updated_at: new Date()
  }, {
    prophetic_member_id: 28,
    position: 'DRUM',
    created_at: new Date(),
    updated_at: new Date()
  }, {
    prophetic_member_id: 30,
    position: 'DRUM',
    created_at: new Date(),
    updated_at: new Date()
  }], {}),
  down: (queryInterface) => queryInterface.bulkDelete('PropheticMemberPosition', null, {})
};
