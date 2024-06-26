var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var resObj = {}
  if(req.session && req.session.isLoggedinUser){
    
    resObj.isLoggedinUser = true;
  }
  else {
    resObj.isLoggedinUser = false;
  }
  res.send(JSON.stringify(resObj));
});

module.exports = router;