const router = require('express').Router();
const Thread = require('../../db').models.thread;

router.post('/', (req, res, next) => {
  Thread.create(req.body)
    .then(createdThread => {
      return createdThread.setUser(req.user);
    })
    .then(() => {
      res.status(200);
    })
    .catch(next);
});

//for upvoting
router.put('/', (req, res, next) => {
  Thread.findOne(req.body)
    .then(foundThread => {
      foundThread.increment('score', {
        by: 1
      });
      res.status(200);
    })
    .catch(next);
});

router.get('/', (req, res, next) => {
  Thread.findAll()
    .then(allThreads => {
      res.send(allThreads);
    })
    .catch(next);
});

module.exports = router;
