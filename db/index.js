const Sequelize = require('sequelize');
const { FLOAT, INTEGER, STRING, BOOLEAN, TEXT } = require('sequelize');

var db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/capstone');

const User = db.define('user', {
  email: {
    type: STRING,
    unique: true
  },
  googleID: STRING
});

const Report = db.define('report', {
  longitude: FLOAT,
  latitude: FLOAT,
  radius: FLOAT,
  businessType: STRING
}, {
    getterMethods: {
      date() {
        return new Date(this.createdAt).toLocaleDateString('en-US');
      }
    }
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
}, {
  getterMethods: {
    date() {
      return new Date(this.createdAt).toLocaleDateString('en-US');
    }
  }
});

const Comment = db.define('comment', {
  comment: TEXT
}, {
    getterMethods: {
      date() {
        return new Date(this.createdAt).toLocaleDateString('en-US');
      }
  }
});

Report.belongsTo(User);
Thread.belongsTo(User);
Comment.belongsTo(Thread);
Thread.hasMany(Comment);

module.exports = db;
