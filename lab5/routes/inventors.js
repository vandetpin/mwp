var express = require('express');
var router = express.Router();
var inventors = require('./../json/inventors.json');

router.get('/', function(req, res, next) {
  console.log(inventors);
  res.render('inventors', {data : inventors});
});

module.exports = router;
