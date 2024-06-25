var express = require('express');
const { data } = require('jquery');
var router = express.Router();
var multer = require("multer");

const storage  = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './public/images/productImage');
},
  filename: function(req, file , callback){
      file_path = "userImage" + '-' + Date.now() + path.extname(file.originalname);
      callback(null, file_path);
  }
});
   var upload = multer({storage : storage}).single('prodImage')
/* GET home page. */
router.post('/', function(req, res, next) {
   var resObj = {}
   upload(req , res , function(err){
    if(err){
        resObj.msg = "ERROR";
        console.log(err);
    }
    else {
        resObj.file_path = file_path;
        resObj.msg = 'SUCCESS'
    }
    res.send(JSON.stringify(resObj))
   })
});

module.exports = router;
