const PropheticMember = require('./prophetic-member');
const PropheticMemberPosition = require('./prophetic-member-position');

PropheticMember.hasMany(PropheticMemberPosition, { as: 'detail' });

module.exports = {
  PropheticMember,
  PropheticMemberPosition
};
