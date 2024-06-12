var express = require('express')
var router = express.router();

router .get('/',function(res,req,next){
    var responseObj;
   if(req.query.accountId == "admin" && req.query.accountPassword == "admin123"){
    responseObj = {msg: 'Valid Details'}
   }
   else {
    responseObj = {msg: 'Invalid'}
   }
   res.send(JSON.stringify(responseObj));
})

module.exports = router;

// PENDING 