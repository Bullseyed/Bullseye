const router = require('express').Router();

router.use('/yelp', require('./yelp'));
router.use('/auth', require('./auth'));
router.use('/me', require('./me'));
router.use('/reports', require('./reports'))

router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;
