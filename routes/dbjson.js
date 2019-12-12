var express = require('express');
var router = express.Router();
const lightbulps = require('../models').Lightbulp;

/* GET home page. */
router.get('/', async function(req, res, next) {
    var result = await lightbulps.findAll();
  res.json(result);
});

module.exports = router;
