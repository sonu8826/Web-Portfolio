var express = require('express');
var router = express.Router();

const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

/* GET home page. */
router.post('/', function(req, res, next) {
  var responseObj;
  console.log(req.body);

  getDbConnection(req.body).then((result)=>{
    console.log("result");
    console.log(result);
    if(result.length == 0){
      responseObj = {msg: 'Invalid'};
    }
    else{
      responseObj = {msg: 'Valid details'};
    }
    res.send(JSON.stringify(responseObj));
  })  
  .catch((err)=>{ 
   console.log(err);
  });

  

  // if (req.body.userName == "admin" && req.body.userPass == "Sample12") {
  //     responseObj = {msg: 'Valid details'};
  // } else {
  //     responseObj = {msg: 'Invalid'};
  // }
  
}); 

async function getDbConnection(userData) {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db("ShopifyApp");
  const collection = db.collection('validateAccountDetails');

  return collection.find(userData).toArray();
  
  // the following code examples can be pasted here...
}

module.exports = router;
