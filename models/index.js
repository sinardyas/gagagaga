const PropheticMember = require('./Prophetic-member');
const PropheticMemberPosition = require('./Prophetic-member-position');

PropheticMember.hasMany(PropheticMemberPosition, { as: 'detail' });

module.exports = {
  PropheticMember,
  PropheticMemberPosition
}

