var express = require('express');
var router = express.Router();

/*
var variable1; // Declare 

variable1 = 1; // Initialisering
var variable2 = 1; // Initialisering

variable1 = 2; // Assignment
variable2 = 2; // Assignment
/*

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express' });
});

module.exports = router;
