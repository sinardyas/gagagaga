const express = require('express');
const bodyParser = require('body-parser');

const { Auth, PropheticMember } = require('./controllers');

const app = express();
app.enable('trust proxy');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());

/**
 *
 * Auth Routes
 * /login
 * @param email string
 * @param password string
 *
 */
app.post('/login', Auth.login);

/**
 * Auth Prophetic Member
 */
app.get('/v1/prophetic-member', PropheticMember.list);

/**
 * handling error response
 */
app.use((err, req, res, next) => res.status(err.status || 500).json({
  success: false,
  code: err.status || 99,
  message: err.message || 'Internal server error!',
  data: null
}));

// eslint-disable-next-line no-console
app.listen(3000, () => console.info('Express is running on port 3000'));

module.exports = app;
