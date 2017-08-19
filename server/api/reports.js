const router = require('express').Router();

const Report = require('../../db').models.report;
const User = require('../../db').models.user;

router.post('/', (req, res, next) => {
   Report.create(req.body)
  .then(createdReport => {
    return createdReport.setUser(req.user)
  })
  .then( createdReport => {
        res.status(204)
  })
  .catch(next)
});

module.exports = router
