var express = require('express');
var router = express.Router();
var mongoDbDetails =  require("./SharedFiles/dbConnection");


/* GET home page. */
router.get('/', function(req, res, next) {
    var productDetails = {
        pdata:  []
    }
    mongoDbDetails.getConnectToCollection("productDetails", "find", {}).then((result) => {
        productDetails.pdata = result;
        res.send(JSON.stringify(productDetails));
    });
    // res.send(JSON.stringify(productDetails));
});

module.exports = router;
