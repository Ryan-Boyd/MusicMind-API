var express = require('express');
var firebase = require("firebase-admin");
var bodyParser = require('body-parser');
var request = require('request');
var mongo = require('mongodb').MongoClient
var aws = require('aws-sdk');

var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname));
app.listen(process.env.PORT || 3000);

//connect to Firebase
/* firebase.initializeApp({
    credential: admin.credential.cert({
        "project_id": "",
        "client_email": "",
        "private_key": ""
    }),
    databaseURL: ""
}); */

/* MONGO */

var url = "mongodb://ryan_boyd:" + encodeURIComponent("ZDZ2HetdfUlTo8Zl") + "@features-shard-00-00-edm1t.mongodb.net:27017,features-shard-00-01-edm1t.mongodb.net:27017,features-shard-00-02-edm1t.mongodb.net:27017/features?ssl=true&replicaSet=features-shard-0&authSource=admin";

/* AWS */

/*
// Create an S3 client
var s3 = new AWS.S3();

var bucketName = 'node-sdk-sample-' + uuid.v4();
var keyName = 'hello_world.txt';

s3.createBucket({Bucket: bucketName}, function() {
  var params = {Bucket: bucketName, Key: keyName, Body: 'Hello World!'};
  s3.putObject(params, function(err, data) {
    if (err)
      console.log(err)
    else
      console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
  });
});
*/

/* GET */

app.get("/authenticate", function(req, res) {});

//get databases
app.get("/databases", function(req, res){
  mongo.connect(url, function(err, db) {
    if(err){
      console.log(err);
    }

    var adminDb = db.admin();

    // List all the available databases
    adminDb.listDatabases(function(err, dbs) {
      if(err){
        console.log(err);
      }
      res.status(200).send(dbs);
      console.log(dbs);
      db.close();
    });
  });
});

//get data
app.get("/data", function(req, res) {
  mongo.connect(url, function(err, db) {
    if(err){
      console.log(err);
    }
    var dump = [];
    var cursor = db.collection("posts").find();
    cursor.forEach(function(doc){
      dump.push(doc);
    },
    function(){
      res.status(200).send({"mongoData":dump});
      db.close();
    });
  });
});

//get user data
app.get("/user/:id", function(req, res) {
    var userId = req.params.id;

    //call database with userId query

    var success = "Success";
    if (success){
      res.status(200).send(success + " with userId " + userId);
    }
    else {
      res.status(500).send("Error");
    }
});


/* POST */

//upload video to servers
app.post("/upload", function(req, res) {

    //however you send video data

    var success = "Success";
    if (success){
      res.status(200).send(success);
    }
    else {
      res.status(500).send("Error");
    }
});

//send video to others
app.post("/deliver", function(req, res) {
    var videoId = req.body.videoId;
    var aSendTo = req.body.sendToUserWithId;
    //send video to users

    var success = "Success";
    if (success){
      res.status(200).send(success + " with this videoID '" + videoId +
      "' and sent to these users '" + aSendTo + "'");
    }
    else {
      res.status(500).send("Error");
    }
});
