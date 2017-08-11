const router = require('express').Router();

router.use('/yelp', require('./yelp'))

router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;

