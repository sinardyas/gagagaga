
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('PropheticMemberPosition', [{
    prophetic_member_id: 4,
    position: 'SINGER',
    created_at: new Date(),
    updated_at: new Date()
  }, {
    prophetic_member_id: 6,
    position: 'SINGER',
    created_at: new Date(),
    updated_at: new Date()
  }, {
    prophetic_member_id: 9,
    position: 'SINGER',
    created_at: new Date(),
    updated_at: new Date()
  }, {
    prophetic_member_id: 13,
    position: 'SINGER',
    created_at: new Date(),
    updated_at: new Date()
  }, {
    prophetic_member_id: 14,
    position: 'SINGER',
    created_at: new Date(),
    updated_at: new Date()
  }, {
    prophetic_member_id: 15,
    position: 'SINGER',
    created_at: new Date(),
    updated_at: new Date()
  }, {
    prophetic_member_id: 16,
    position: 'SINGER',
    created_at: new Date(),
    updated_at: new Date()
  }, {
    prophetic_member_id: 17,
    position: 'SINGER',
    created_at: new Date(),
    updated_at: new Date()
  }, {
    prophetic_member_id: 18,
    position: 'SINGER',
    created_at: new Date(),
    updated_at: new Date()
  }, {
    prophetic_member_id: 19,
    position: 'SINGER',
    created_at: new Date(),
    updated_at: new Date()
  }, {
    prophetic_member_id: 20,
    position: 'SINGER',
    created_at: new Date(),
    updated_at: new Date()
  }, {
    prophetic_member_id: 21,
    position: 'SINGER',
    created_at: new Date(),
    updated_at: new Date()
  }, {
    prophetic_member_id: 22,
    position: 'SINGER',
    created_at: new Date(),
    updated_at: new Date()
  }, {
    prophetic_member_id: 23,
    position: 'SINGER',
    created_at: new Date(),
    updated_at: new Date()
  }, {
    prophetic_member_id: 24,
    position: 'SINGER',
    created_at: new Date(),
    updated_at: new Date()
  }, {
    prophetic_member_id: 25,
    position: 'SINGER',
    created_at: new Date(),
    updated_at: new Date()
  }, {
    prophetic_member_id: 26,
    position: 'SINGER',
    created_at: new Date(),
    updated_at: new Date()
  }, {
    prophetic_member_id: 27,
    position: 'SINGER',
    created_at: new Date(),
    updated_at: new Date()
  }, {
    prophetic_member_id: 31,
    position: 'SINGER',
    created_at: new Date(),
    updated_at: new Date()
  }], {}),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('PropheticMemberPosition', null, {})
};
