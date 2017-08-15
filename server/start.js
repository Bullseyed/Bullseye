const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const db = require('../db');

const { User } = require('../db');

if (process.env.NODE_ENV !== 'production') require('../secret.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

// you'll of course want static middleware so your browser can request things like your 'bundle.js'
app.use(express.static(path.join(__dirname, '../public/')));

// Any routes or other various middlewares should go here!
app.use('/api', require('./api')); // matches all requests to /api

app.use(passport.initialize());
app.use(passport.session());

app.get('auth/google', passport.authenticate('google', { scope: 'email' }));
app.get('auth/google/callback', passport.authenticate('google', {
  successRedirect: '/',
  failureRedirect: '/'
}));

passport.use(
  new GoogleStrategy({
    clientID: '92045154125-jfqstsfj8rceu7m97iq4mnv529f0qjim.apps.googleusercontent.com',
    clientSecret: 'xXfF0HaV6e3Xxexa1u_e0SpN',
    callbackURL: 'http://localhost:1337/auth/google/callback'
  }, (token, refreshToken, profile, done) => {
    var info = {
      email: profile.emails[0].value,
    };
    User.findOrCreate({
      where: {googleId: profile.id},
      defaults: info
    })
    .spread(user => {
      done(null, user);
    })
    .catch(done);
  })
);

// Make sure this is right at the end of your server logic!
// The only thing after this might be a piece of middleware to serve up 500 errors for server problems
// (However, if you have middleware to serve up 404s, that go would before this as well)
app.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
  next();
});

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

db.sync()
.then(() => {
  app.listen(
     process.env.PORT || 1337,
     () => {
         console.log('server started');
  });
});
