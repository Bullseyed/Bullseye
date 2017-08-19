const Sequelize = require('sequelize');
const { FLOAT, INTEGER, STRING, BOOLEAN, TEXT } = require('sequelize');

var db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/capstone');

const User = db.define('user', {
  email: STRING,
  googleID: STRING
});

const Report = db.define('report', {
  longitude: FLOAT,
  latitude: FLOAT,
  radius: INTEGER,
  businessType: STRING
});

const Thread = db.define('thread', {
  longitude: FLOAT,
  latitude: FLOAT,
  score: {
    type: INTEGER,
    defaultValue: 0
  },
  idea: STRING,
  description: TEXT
});

const Comment = db.define('comment', {
  comment: TEXT
});

Report.belongsTo(User);
Thread.belongsTo(User);
Comment.belongsTo(Thread);

module.exports = db;
