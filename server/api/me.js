const router = require('express').Router();
const User = require('../../db').models.user;
// const HttpError = require('../../utils/HttpError');

// This marries the original auth code we wrote to Passport.
// An alternative would be to use the "local strategy" option with Passport.

// check currently-authenticated user, i.e. "who am I?"
router.get('/', (req, res, next) => {
  // with Passport:
  res.json(req.user);
  // // before, without Passport:
  // User.findById(req.session.userId)
  // .then(user => res.json(user))
  // .catch(next);
});

// signup, i.e. "let `me` introduce myself"
router.post('/', function (req, res, next) {
  User.findOrCreate({
    where: {
      email: req.body.email
    },
    defaults: { // if the user doesn't exist, create including this info
      password: req.body.password
    }
  })
  .spread((user, created) => {
    if (created) {
      // with Passport:
      req.logIn(user, function (err) {
        if (err) return next(err);
        res.json(user);
      });
      // // before, without Passport:
      // req.session.userId = user.id;
      // res.json(user);
    } else {
      res.sendStatus(401); // this user already exists, you cannot sign up
    }
  })
  .catch(next);
});

// login, i.e. "you remember `me`, right?"
router.put('/', function (req, res, next) {
  User.findOne({
    where: req.body // email and password
  })
  .then(user => {
    if (!user) {
      res.sendStatus(401); // no message; good practice to omit why auth fails
    } else {
      // with Passport:
      req.logIn(user, (err) => {
        if (err) return next(err);
        res.json(user);
      });
      // // before, without Passport:
      // req.session.userId = user.id;
      // res.json(user);
    }
  })
  .catch(next);
});

// logout, i.e. "please just forget `me`"
router.delete('/', function (req, res, next) {
  // with Passport
  req.logOut();
  // // before, without Passport
  // req.session.destroy();
  res.sendStatus(204);

});

module.exports = router;
