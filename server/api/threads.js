const router = require('express').Router();
const Thread = require('../../db').models.thread;
const Comment = require('../../db').models.comment;

router.post('/', (req, res, next) => {
  Thread.create(req.body)
    .then(createdThread => {
      createdThread.setUser(req.user);
      res.json(createdThread);
    })
    .catch(next);
});

//for upvoting
router.put('/', (req, res, next) => {
  Thread.update(req.body, {
    where: {id: req.body.id},
    returning: true
  })
    .then(result => res.json(result[1][0]))
    .catch(next);
});

router.get('/', (req, res, next) => {
  Thread.findAll({include: [{model: Comment}]})
    .then(allThreads => {
      res.send(allThreads);
    })
    .catch(next);
});

module.exports = router;
