var express = require('express');
var router = express.Router();
const lightbulps = require('../models').Lightbulp;
const faker = require('faker');

/* GET users listing. */
router.get('/', function(req, res, next) {

const on_or_off = faker.random.boolean();
const nominel_use = faker.random.number({
  'min': 0,
  'max': 100
});
const actual_use = faker.random.number({
  'min': 0,
  'max': 100
});
const light_percent = faker.random.number({
  'min': 0,
  'max': 100
});
const hardware_type = faker.random.number({
  'min': 1,
  'max': 3
});
const software_version = faker.random.number({
  'min': 1,
  'max': 5
});

const body = {
  on_or_off: on_or_off, 
  nominel_use: nominel_use,
  actual_use: actual_use, 
  light_percent: light_percent,
  hardware_type: hardware_type, 
  software_version: software_version,
};


lightbulps.create(body);

//find the user



//destroy the user with the object, this will call DELETE where id = our_user_id automatically.

  res.send('Dummy data created');
});

module.exports = router;
