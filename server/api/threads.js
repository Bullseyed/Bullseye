const router = require('express').Router();
const Thread = require('../../db').models.thread;

router.post('/', (req, res, next) => {
   Thread.create(req.body)
  .then(createdThread => {
    return createdThread.increment('score', {by: 1});
  })
  .then( createdThread => {
    return createdThread.setUser(req.user);
  })
  .then( createdThread => {
    res.status(200);
  })
  .catch(next);
});

module.exports = router;
