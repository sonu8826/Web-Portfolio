var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  var mydata = {
    name : 'Inderjeet',
    age : 23,
    gender : 'male',
    department : 'IT',
    address : 'delhi'
  };

  res.send(JSON.stringify(mydata));
});

module.exports = router;
