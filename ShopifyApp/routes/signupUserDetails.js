var express = require('express');
var router = express.Router();

const { MongoClient } = require('mongodb');
const { response } = require('../app');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

/* GET users listing. */
router.post('/', function(req, res, next) {
  var resObj ={}
  console.log(req.body);
  resObj.msg = "Inserted Successfully";
  getDbConnection(req.body).then((response)=>{
    // console.log(response);
    res.send(JSON.stringify(resObj));
  })

});

async function getDbConnection(userData) {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db("ShopifyApp");
  const collection = db.collection('validateAccountDetails');

  return collection.insertOne(userData);
  
  // the following code examples can be pasted here...
}

module.exports = router;
