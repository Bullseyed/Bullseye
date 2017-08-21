const router = require('express').Router();
const Comments = require('../../db').models.comment;

router.post('/', (req, res, next) => {
  Comments.create(req.body)
    .then(createdComment => res.json(createdComment))
    .catch(next);
});

router.get('/', (req, res, next) => {
  Comments.findAll()
    .then(allComments => res.json(allComments))
    .catch(next);
});

module.exports = router;
