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
        pName : "Polo",
        pDesc : "Polo Men Regular Fit Track Pant || Regular Fit Track Pants",
        pPrice : "₹ 1,999.00",
        btn1 : "Buy Now",
        Btn2 : "Add to cart"
       },
       {
        pImg : "./project-img/suit-1.webp",
        pName : "Mangalam",
        pDesc : "Womens regular Kurta set || for regular wearing ",
        pPrice : "₹ 1,399.00",
        btn1 : "Buy Now",
        Btn2 : "Add to cart"
       },
       {
        pImg : "./project-img/tshirt-1.jpeg",
        pName : "Nike",
        pDesc : "Nike Men Regular Fit T-Shirt || For regular Wearing ",
        pPrice : "₹ 599.00",
        btn1 : "Buy Now",
        Btn2 : "Add to cart"
       },
       {
        pImg : "./project-img/suit-2.jpg",
        pName : "Manyawar",
        pDesc : "All new womens Kurta set || To enhance your Look",
        pPrice : "₹ 1,199.00",
        btn1 : "Buy Now",
        Btn2 : "Add to cart"
       },
       {
        pImg : "./project-img/tshirt-3.jpeg",
        pName : "Lacoster",
        pDesc : "Lacoster Men Regular Over-Sized Tshirt || Regular Over-Sized Fits",
        pPrice : "₹ 999.00",
        btn1 : "Buy Now",
        Btn2 : "Add to cart"
       }
    ]
  };

  res.send(JSON.stringify(productData));
});

module.exports = router;
