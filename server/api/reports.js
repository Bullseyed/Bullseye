const router = require('express').Router();
const Report = require('../../db').models.report;

router.post('/', (req, res, next) => {
   req.body.userId = req.user.id;
   Report.create(req.body)
  .then(() => {
        res.status(204);
  })
  .catch(next);
});

module.exports = router;
