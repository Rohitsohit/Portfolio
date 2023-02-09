
// file name : users.js
//    Name : Rohit
//    Student ID : 301315173
// 	Date : 28-01-2023


var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
