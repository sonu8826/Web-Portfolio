var express = require('express');
var router = express.Router();
var mongoDbDetails =  require("./SharedFiles/dbConnection");


/* GET home page. */
router.get('/', function(req, res, next) {
    var reqFilter = req.query;
    var userFilterQuery = {};
    if(Object.keys(reqFilter).length > 0){
        if(reqFilter.priceRange){
            userFilterQuery.price = {
                $lt : parseInt(reqFilter.priceRange)
            }
        }
        if(reqFilter.selectedCategory.length){
            userFilterQuery.category = {
                $in : reqFilter.selectedCategory
            }
        }
    }
    console.log("our query object");
    console.log(userFilterQuery);
    var productDetails = {
        pdata:  []
    }
    mongoDbDetails.getConnectToCollection("productDetails", "find", userFilterQuery).then((result) => {
        productDetails.pdata = result;
        res.send(JSON.stringify(productDetails));
    });
    // res.send(JSON.stringify(productDetails));
});

module.exports = router;
