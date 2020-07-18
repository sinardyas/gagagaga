const bcrypt = require('bcrypt');

const { PropheticMember } = require('../models');

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const propheticData = await PropheticMember.findOne({
      where: { email }
    });

    if (!propheticData) {
      return next({ status: 404, message: 'User not found!' });
    }

    const isLoginSuccess = await bcrypt.compare(password, propheticData.password);
    delete propheticData.dataValues.password;

    if (!isLoginSuccess) return next({ status: 401, message: 'Invalid credential!' });

    return res.status(200).json({
      success: true,
      code: 200,
      message: 'Login success',
      data: propheticData
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = { login };
