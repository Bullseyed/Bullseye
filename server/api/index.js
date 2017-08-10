const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.send('hollo')
});




router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;
