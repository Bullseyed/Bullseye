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

router.get('/:id', (req,res,next)=>{
  Report.find({where:{ userId:req.params.id } })
  .then((reports)=>res.json(reports))
  .catch(next)
})

module.exports = router;
