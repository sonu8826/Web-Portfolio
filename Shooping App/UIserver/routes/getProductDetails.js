var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  var productData = {
    pData: [
      {
        pImg : "./project-img/lower-1.jpeg",
        pName : "Nike",
        pDesc : "Lymio Men Regular Fit Track Pant || Regular Fit Track Pants",
        pPrice : "₹ 1,999.00",
        btn1 : "Buy Now",
        Btn2 : "Add to cart"
       },
       {
        pImg : "./project-img/lower-2.jpeg",
        pName : "Nike",
        pDesc : "Lymio Men Regular Fit Track Pant || Regular Fit Track Pants",
        pPrice : "₹ 1,999.00",
        btn1 : "Buy Now",
        Btn2 : "Add to cart"
       },
       {
        pImg : "./project-img/lower-2.jpeg",
        pName : "Nike",
        pDesc : "Lymio Men Regular Fit Track Pant || Regular Fit Track Pants",
        pPrice : "₹ 1,999.00",
        btn1 : "Buy Now",
        Btn2 : "Add to cart"
       },
       {
        pImg : "./project-img/tshirt-1.jpeg",
        pName : "Nike",
        pDesc : "Lymio Men Regular Fit Track Pant || Regular Fit Track Pants",
        pPrice : "₹ 1,999.00",
        btn1 : "Buy Now",
        Btn2 : "Add to cart"
       },
       {
        pImg : "./project-img/lower-2.jpeg",
        pName : "Nike",
        pDesc : "Lymio Men Regular Fit Track Pant || Regular Fit Track Pants",
        pPrice : "₹ 1,999.00",
        btn1 : "Buy Now",
        Btn2 : "Add to cart"
       },
       {
        pImg : "./project-img/tshirt-3.jpeg",
        pName : "Nike",
        pDesc : "Lymio Men Regular Fit Track Pant || Regular Fit Track Pants",
        pPrice : "₹ 1,999.00",
        btn1 : "Buy Now",
        Btn2 : "Add to cart"
       }
    ]
  };

  res.send(JSON.stringify(productData));
});

module.exports = router;
