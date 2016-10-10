const algorithms = 'aes256';
const password = 'asaadsaad';
var app = require('express')();
var crypto = require('crypto');
var MongoClient = require('mongodb').MongoClient;
var decipher = crypto.createDecipher(algorithms, password);

app.listen(8080);
app.get('/', function(req, res) {
    MongoClient.connect("mongodb://localhost:27017/testDB", function(err, db) {
        if(err) { return console.dir(err); }

        db.collection('lab1').findOne({}, (err, doc) => {
            const decripted = decipher.update(doc.message,'hex','utf8') + decipher.final('utf8');

            // send response to user
            res.writeHead(200);
            res.end(decripted);
        });
    });
});


