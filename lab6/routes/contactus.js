var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('contactus', {errors : null});
});

router.post('/', function(req, res, next) {
  // validate 
  req.assert('name', 'Full name is required').notEmpty();
  req.assert('type', 'Type is required').notEmpty();
  req.assert('message', 'Message is required').notEmpty();

  const errors = req.validationErrors();
  if(errors) {
    console.log(errors);
    res.render('contactus', {errors : errors});
  } else {
  // save data in file
  console.log(req.body);
  fs.writeFile('request-body.txt', JSON.stringify(req.body), 'utf8', (err)=>{
      if(err) console.log(err);
      console.log('done saving request body to file');
  });

  // display thank you message
    res.writeHead(200);
    res.end("Thank you");
  }
});


module.exports = router;
