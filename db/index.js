const Sequelize = require('sequelize');

var db = new Sequelize('postgres://localhost:5432/capstone');

const User = db.define('user', {
  email: Sequelize.STRING,
  googleID: Sequelize.STRING
});

module.exports = db;
