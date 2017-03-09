var express = require('express');
var firebase = require("firebase-admin");
var bodyParser = require('body-parser');
var request = require('request');
var mongo = require('mongodb').MongoClient

//connect to Firebase
/* firebase.initializeApp({
    credential: admin.credential.cert({
        "project_id": "",
        "client_email": "",
        "private_key": ""
    }),
    databaseURL: ""
}); */


//connect to Mongo
/*mongo.connect(url, function(err, db) {
  console.log("Connected correctly to server");

  db.close();
});
*/


var app = express();
app.use(bodyParser.json());

app.get("/authenticate", function(req, res) {});

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

app.use(express.static(__dirname));
app.listen(process.env.PORT || 3000);
