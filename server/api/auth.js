const router = require('express').Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const User = require('../../db').models.user;

passport.use(
  new GoogleStrategy({
    clientID: '392045154125-00051vrqokg6k262rip63h549qr71mfs.apps.googleusercontent.com',
    clientSecret: '-1w_cZuL1oZUhi30iAHx3Tvb',
    callbackURL: '/api/auth/verify'
  }, (token, refreshToken, profile, done) => {
    console.log(profile)
    User.findOrCreate({
      where: {googleID: profile.id},
      defaults: {email: profile.emails[0].value}
    })
    .spread(user => {
      console.log("USER", user);
      done(null, user);
    })
    .catch(done);
  })
);

router.get('/', passport.authenticate('google', { scope: 'email' }));
router.get('/verify', passport.authenticate('google', {
  successRedirect: '/',
  failureRedirect: '/'
}));

module.exports = router;
