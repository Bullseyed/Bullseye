const router = require('express').Router();

router.post('/', (req, res, next) => {
  console.log('hello', req.body)
  res.send(req.body)
});

module.exports = router
