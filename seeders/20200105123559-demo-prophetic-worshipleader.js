
module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('PropheticMemberPosition', [{
    prophetic_member_id: 13,
    position: 'WORSHIPLEADER',
    created_at: new Date(),
    updated_at: new Date()
  }, {
    prophetic_member_id: 14,
    position: 'WORSHIPLEADER',
    created_at: new Date(),
    updated_at: new Date()
  }, {
    prophetic_member_id: 15,
    position: 'WORSHIPLEADER',
    created_at: new Date(),
    updated_at: new Date()
  }, {
    prophetic_member_id: 16,
    position: 'WORSHIPLEADER',
    created_at: new Date(),
    updated_at: new Date()
  }, {
    prophetic_member_id: 17,
    position: 'WORSHIPLEADER',
    created_at: new Date(),
    updated_at: new Date()
  }, {
    prophetic_member_id: 18,
    position: 'WORSHIPLEADER',
    created_at: new Date(),
    updated_at: new Date()
  }, {
    prophetic_member_id: 19,
    position: 'WORSHIPLEADER',
    created_at: new Date(),
    updated_at: new Date()
  }], {}),
  down: (queryInterface) => queryInterface.bulkDelete('PropheticMemberPosition', null, {})
};
