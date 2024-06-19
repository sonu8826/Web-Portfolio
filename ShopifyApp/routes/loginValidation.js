var express = require('express');
var router = express.Router();

// const { MongoClient } = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);

var mongoDbDetails =  require("./SharedFiles/dbConnection");
const bcrypt = require('bcrypt');

/* GET home page. */
router.post('/', function(req, res, next) {
  var responseObj;
  console.log(req.body);

  mongoDbDetails.getConnectToCollection("validateAccountDetails","finduser",req.body).then((result)=>{
    console.log("result");
    console.log(result);
    if(result.length == 0){
      responseObj = {msg: 'Invalid'}; // No data found :
    }
    else{

      bcrypt.compare(req.body.accountPassword, result[0].accountPassword, function(err, result) {
        if (result) {
            responseObj = {msg: 'Valid details'};
        } else {
            responseObj = {msg: 'Invalid'};
        }
    });
      // responseObj = {msg: 'Valid details'};
    }
    res.send(JSON.stringify(responseObj));
  })  
 

  

  // if (req.body.userName == "admin" && req.body.userPass == "Sample12") {
  //     responseObj = {msg: 'Valid details'};
  // } else {
  //     responseObj = {msg: 'Invalid'};
  // }
  
}); 

// async function getDbConnection(userData) {
//   // Use connect method to connect to the server
//   await client.connect();
//   console.log('Connected successfully to server');
//   const db = client.db("ShopifyApp");
//   const collection = db.collection('validateAccountDetails');

//   return collection.find(userData).toArray();
  
//   // the following code examples can be pasted here...
// }

module.exports = router;
