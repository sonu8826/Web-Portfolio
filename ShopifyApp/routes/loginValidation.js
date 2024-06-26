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
    console.log("Ye wala result");
    console.log(result);
    if(result.length == 0){
      responseObj = {msg: 'Invalid'}; // No data found :
    }
    else{

      bcrypt.compare(req.body.userPass, result[0].userPass, function(err, result) {
        if (result) {
            req.session.isLoggedinUser = true;
            responseObj = {msg: 'Valid details'};
        } else {
          req.session.isLoggedinUser = false;
            responseObj = {msg: 'Invalid'};
        }
        res.send(JSON.stringify(responseObj)); // Problem here showing invalid Credentials and my isUserLoggedIn value will always true dont know why;
    });
      // responseObj = {msg: 'Valid details'};
    }
    
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
