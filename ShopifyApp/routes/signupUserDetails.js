var express = require('express');
var router = express.Router();
var mongoDbDetails =  require("./SharedFiles/dbConnection");

const bcrypt = require('bcrypt');
const saltRounds = 10;
const sensitiveData = 'Sample1234';


/* GET users listing. */
router.post('/', function(req, res, next) {
  var resObj ={}
  
  bcrypt.hash(req.body.userPass, saltRounds, function(err, hash) {
    // Store hash in your password DB.
    req.body.userPass = hash;
    mongoDbDetails.getConnectToCollection("validateAccountDetails", "insert", req.body).then((result) => {

        resObj.msg = 'Inserted Successfully';
        res.send(JSON.stringify(resObj));        
    }).catch((error) => {
        resObj.msg = 'Error While Inserting';
        res.send(JSON.stringify(resObj));
    })
});

  // console.log(req.body);
  // resObj.msg = "Inserted Successfully";
  // getDbConnection(req.body).then((response)=>{
  //   // console.log(response);
  //   res.send(JSON.stringify(resObj));
  // })

});

// async function getDbConnection(userData) {
//   // Use connect method to connect to the server
//   await client.connect();
//   console.log('Connected successfully to server');
//   const db = client.db("ShopifyApp");
//   const collection = db.collection('validateAccountDetails');

//   return collection.insertOne(userData);
  
//   // the following code examples can be pasted here...
// }

module.exports = router;
