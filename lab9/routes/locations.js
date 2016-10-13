var express = require('express');
var router = express.Router();
var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;

router.get('/', function(req, res, next) {
  res.render('locations', {errors : null, results : null});
});

router.get('/search', function(req, res, next) {
  res.render('locations-search', {errors : null, search : [0, 0], results : null});
});


//add location
router.post('/', function(req, res, next) {
  // validate 
  req.assert('name', 'Name is required').notEmpty();
  req.assert('category', 'Category is required').notEmpty();
  req.assert('latitude', 'Latitude is required').notEmpty();
  req.assert('longitude', 'Longitude is required').notEmpty();

  const errors = req.validationErrors();
  if(errors) {
    console.log(errors);
    res.render('locations', {errors : errors});
  } else {
  
      // save request to db
      MongoClient.connect("mongodb://localhost:27017/testDB", function(err, db) {
          if(err) { return console.dir(err); }

          const data = {
            name : req.body.name,
            category : req.body.category,
            location : [parseFloat(req.body.longitude), parseFloat(req.body.latitude)]
          };
          console.log(data);
          db.collection('locations').insert(data, (err, doc) => {
            if(err) throw err;

            // send response to user
            res.writeHead(200);
            res.end("Save succeed");
          });
      });
  }
});

//search location
router.post('/search', function(req, res, next) { 

     MongoClient.connect("mongodb://localhost:27017/testDB", function(err, db) {
        if(err) { return console.dir(err); }
        
        const criteria = {
            category : req.body.category,
            location : {
              '$near' : [parseFloat(req.body.longitude), parseFloat(req.body.latitude)]
            }
        };

        const option = {
          limit : 3  
        };

        console.dir(criteria);
        db.collection('locations').find(criteria, {}, option).toArray((err, doc) => {
          if(err) throw err;

          console.dir(doc);
          // send response to user
          res.render('locations-search', {errors : null, results : doc, search : criteria});
        });
      });
});

module.exports = router;
