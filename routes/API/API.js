var express = require('express');
var router = express.Router();
const lightbulps = require('../../models').Lightbulp;

/* post new lightbulp. */
router.post('/lightbulps', function(req, res, next) {
  console.log(req['body'])
  lightbulps.create(req['body'])
  res.send("Data indsat");
});

/* update existing lightbulp. */
router.put('/lightbulps/:id', function(req, res, next) {
  lightbulps.update(
    req.body,
    {where:{id:req.params.id}});
  res.send("Data ændret");
});

/* delete lightbulp. */
router.delete('/lightbulps/:id', function(req, res, next) {
  lightbulps.destroy(
    {returning:true, where:{id:req.params.id}});
  res.send("Data slettet");
});

/* GET all lightbulps. */
router.get('/lightbulps', async function(req, res, next) {
  var result = await lightbulps.findAll();
res.json(result);
});

/* GET lightbulp by ID. */
router.get('/lightbulps/:id', async function(req, res, next) {
  var result = await lightbulps.findByPk(req.params.id);
res.json(result);
});

module.exports = router;
