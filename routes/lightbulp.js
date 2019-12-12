var express = require('express');
var router = express.Router();
const lightbulps = require('../models').Lightbulp;
const faker = require('faker');

/* GET users listing. */
router.get('/', function(req, res, next) {

const on_or_off = faker.random.boolean();
const nominel_use = faker.random.number();
const actual_use = faker.random.number();
const light_percent = faker.random.number();
const hardware_type = faker.random.number();
const software_version = faker.random.number();

const body = {
  on_or_off: on_or_off, 
  nominel_use: nominel_use,
  actual_use: actual_use, 
  light_percent: light_percent,
  hardware_type: hardware_type, 
  software_version: software_version,
};


const newUser = lightbulps.create(body);

//find the user



//destroy the user with the object, this will call DELETE where id = our_user_id automatically.

  res.send('Dummy data created');
});

module.exports = router;
