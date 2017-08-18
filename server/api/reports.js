const router = require('express').Router();
const Report = require('../../db').models.report;

router.post('/', (req, res, next) => {
  console.log(req.body);
  Report.create(req.body)
  .then(report => {
    res.json(report);
  });
});

module.exports = router;
