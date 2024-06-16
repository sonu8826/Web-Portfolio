var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  var responseObj;
  // console.log(req.body);
  if (req.body.userName == "admin" && req.body.userPass == "Sample12") {
      responseObj = {msg: 'Valid details'};
  } else {
      responseObj = {msg: 'Invalid'};
  }
  res.send(JSON.stringify(responseObj));
});

module.exports = router;
