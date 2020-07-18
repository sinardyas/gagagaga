
module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('PropheticMemberPosition', [{
    prophetic_member_id: 1,
    position: 'MULTIMEDIA',
    created_at: new Date(),
    updated_at: new Date()
  }, {
    prophetic_member_id: 2,
    position: 'MULTIMEDIA',
    created_at: new Date(),
    updated_at: new Date()
  }, {
    prophetic_member_id: 3,
    position: 'MULTIMEDIA',
    created_at: new Date(),
    updated_at: new Date()
  }, {
    prophetic_member_id: 4,
    position: 'MULTIMEDIA',
    created_at: new Date(),
    updated_at: new Date()
  }, {
    prophetic_member_id: 5,
    position: 'MULTIMEDIA',
    created_at: new Date(),
    updated_at: new Date()
  }, {
    prophetic_member_id: 6,
    position: 'MULTIMEDIA',
    created_at: new Date(),
    updated_at: new Date()
  }, {
    prophetic_member_id: 7,
    position: 'MULTIMEDIA',
    created_at: new Date(),
    updated_at: new Date()
  }, {
    prophetic_member_id: 8,
    position: 'MULTIMEDIA',
    created_at: new Date(),
    updated_at: new Date()
  }, {
    prophetic_member_id: 9,
    position: 'MULTIMEDIA',
    created_at: new Date(),
    updated_at: new Date()
  }, {
    prophetic_member_id: 10,
    position: 'MULTIMEDIA',
    created_at: new Date(),
    updated_at: new Date()
  }], {}),
  down: (queryInterface) => queryInterface.bulkDelete('PropheticMemberPosition', null, {})
};
