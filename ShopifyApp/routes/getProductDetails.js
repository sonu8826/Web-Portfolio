var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var productDetails = {pdata:  [
        {
            "id": "p_01",
            "title": "Shoe",
            "price": 3500,
            "discountPercent": 10,
            "description": "A very high and powerful Shoe, Comfortable for running",
            "mainImage": "https://m.media-amazon.com/images/I/71p+ffg6+lL._SY625_.jpg",
            "imageList": [
                "https://m.media-amazon.com/images/I/61YktH7csbL._SY625_.jpg",
                "https://m.media-amazon.com/images/I/71T1K4ZFPkL._SY625_.jpg"
            ],
            "rating": 3.5,
            "details": {
                "Material type": "Mesh",
                "Closure type": "Lace-Up",
                "Heel type": "No Heel",
                "Water resistance level": "Not Water Resistant"
            },
            "category": "Mens",
            "isLimitedDeal": true
        },
        {
            "id": "p_02",
            "title": "Taygeer Travel Laptop Backpack",
            "price": 3000,
            "discountPercent": 20,
            "description": "Taygeer Travel Laptop Backpack for Men Women, Airplane Approved Travel Backpack Suitcase with Usb Charging Port, Lightweight College 35l Luggage Bag 15.6inch Laptop Backpack Gifts for Business,Black",
            "mainImage": "https://m.media-amazon.com/images/I/61RclLQJfgL._AC_SX425_.jpg",
            "imageList": [
                "https://m.media-amazon.com/images/I/71d1Dzvx+gL._AC_SX425_.jpg",
                "https://m.media-amazon.com/images/I/71HpBHj5qgL._AC_SX425_.jpg"
            ],
            "rating": 4.7,
            "details": {
                "Care instructions": "Hand Wash Only",
                "Country of Origin": "India"
            },
            "category": "Mens",
            "isLimitedDeal": false
        },
        {
            "id": "p_03",
            "title": "Boldfit Winter",
            "price": 3900,
            "discountPercent": 10,
            "description": "Boldfit Winter Jacket for Men Quilted Hooded Winter Jackets for Men & Boys Full Sleeve Mens Jacket Monsoon Jackets for Men Jacket for Men Wear Bomber Jacket for Men Jerkin for Men Padded Jacket",
            "mainImage": "https://m.media-amazon.com/images/I/61j2FBMg2LL._SX569_.jpg",
            "imageList": [
                "https://m.media-amazon.com/images/I/619xinbT1GL._SX569_.jpg",
                "https://m.media-amazon.com/images/I/61ylpTw45mL._SX569_.jpg"
            ],
            "rating": 4.0,
            "details": {
                "Brand": "Boldfit",
                "Material Type": "Polyester",
                "Material Composition": "Polyester",
                "Style": "Padded Jacket"
            },
            "category": "Mens",
            "isLimitedDeal": true
        },
        {
            "id": "p_04",
            "title": "Intellilens RoadRider",
            "price": 2999,
            "discountPercent": 5,
            "description": "Intellilens RoadRider Branded Latest and Stylish Sunglasses | Polarized and 100% UV Protected | Light Weight, Durable, Premium Looks | Men | Black Lenses | Wayfarer | Medium",
            "mainImage": "https://m.media-amazon.com/images/I/41h8TmQC5wL._SX679_.jpg",
            "imageList": [
                "https://m.media-amazon.com/images/I/51j3XEYmjmL._SX679_.jpg",
                "https://m.media-amazon.com/images/I/61+tOxH8irL._SX679_.jpg"
            ],
            "rating": 3.8,
            "details": {
                "Product Dimensions": "14.2 x 5.4 x 1.8 cm; 100 g",
                "Date First Available": " 17 August 2022",
                "Manufacturer ": "Intellilens",
                "Generic Name": "Sunglasses"
            },
            "category": "Mens",
            "isLimitedDeal": false
        },
        {
            "id": "p_05",
            "title": "T-Shirt",
            "price": 1499,
            "discountPercent": 15,
            "description": "UNIBERRY Men's Cotton Blend Half Sleeve Solid Polo Neck T-Shirt Has A Short Sleeve & Pocket On Chest-ANREMT4-MNT",
            "mainImage": "https://m.media-amazon.com/images/I/81yAJ8IiLEL._SY741_.jpg",
            "imageList": [
                "https://m.media-amazon.com/images/I/81yAJ8IiLEL._SY741_.jpg",
                "https://m.media-amazon.com/images/I/61yy--3Ei8L._SY741_.jpg"
            ],
            "rating": 3.8,
            "details": {
                "Package Dimensions": "30 x 25 x 2 cm; 250 g",
                "Date First Available ": "14 March 2024",
                "Item part number": "REMT3-PK_4XL",
                "Country of Origin": "India"
            },
            "category": "Mens",
            "isLimitedDeal": false
        },
        {
            "id": "p_06",
            "title": "Belt",
            "price": 999,
            "discountPercent": 8,
            "description": "Zacharias Men's Faux Leather Belt Automatic Buckle",
            "mainImage": "https://m.media-amazon.com/images/I/614c85ud-ML._SX679_.jpg",
            "imageList": [
                "https://m.media-amazon.com/images/I/71UpgQLpRbL._SY741_.jpg",
                "https://m.media-amazon.com/images/I/71S6dDLzjXL._SX679_.jpg"
            ],
            "rating": 3.6,
            "details": {
                "Care Instructions": "non washable",
                "Width": "1.5 Inches",
                "Fabric": "Artificial Leather"
            },
            "category": "Mens",
            "isLimitedDeal": false
        },
        {
            "id": "p_07",
            "title": "Hat",
            "price": 500,
            "discountPercent": 25,
            "description": "Stylish and comfortable hat",
            "mainImage": "https://m.media-amazon.com/images/I/61VARGNVi0L._SY741_.jpg",
            "imageList": [
                "https://m.media-amazon.com/images/I/61mdKruB4uL._SY741_.jpg",
                "https://m.media-amazon.com/images/I/61+F09C-KFL._SY741_.jpg"
            ],
            "rating": 4.7,
            "details": {
                "Material type": "Cotton",
                "Occasion type": "Christmas, Birthday",
                "Style": "Baseball",
                "Care instructions": "Hand Wash Only"
            },
            "category": "Mens",
            "isLimitedDeal": false
        },
        {
            "id": "p_08",
            "title": "Jeans",
            "price": 3000,
            "discountPercent": 15,
            "description": "Comfortable and stylish jeans",
            "mainImage": "https://m.media-amazon.com/images/I/616xchp1ECL._SY679_.jpg",
            "imageList": [
                "https://m.media-amazon.com/images/I/81rlLrgobLL._SY741_.jpg",
                "https://m.media-amazon.com/images/I/616xchp1ECL._SY679_.jpg"
            ],
            "rating": 4.4,
            "details": {
                "Material type": "Cotton",
                "Length": "Standard Length",
                "Style": "Modern",
                "Closure type": "Button"
            },
            "category": "Mens",
            "isLimitedDeal": true
        },
        {
            "id": "p_09",
            "title": "T-Shirt",
            "price": 1500,
            "discountPercent": 10,
            "description": "Soft and comfortable t-shirt",
            "mainImage": "https://m.media-amazon.com/images/I/71HBNT3R66L._SX569_.jpg",
            "imageList": [
                "https://m.media-amazon.com/images/I/61qEc4rsOiL._SX679_.jpg",
                "https://m.media-amazon.com/images/I/71vUPRpSFSL._SX679_.jpg"
            ],
            "rating": 4.1,
            "details": {
                "Material type": "Cotton",
                "Pattern": "Solid",
                "Fit type": "Regular Fit",
                "Length": "Standard Length"
            },
            "category": "Mens",
            "isLimitedDeal": false
        },
        {
            "id": "p_10",
            "title": "Wallet",
            "price": 800,
            "discountPercent": 10,
            "description": "Compact and stylish wallet",
            "mainImage": "https://m.media-amazon.com/images/I/71mZfCo-TpL._SX425_.jpg",
            "imageList": [
                "https://m.media-amazon.com/images/I/81BzPacyA-L._SX425_.jpg",
                "https://m.media-amazon.com/images/I/81v5u80D-EL._SX425_.jpg"
            ],
            "rating": 4.5,
            "details": {
                "Material type": "Leather",
                "Outer material": "Leather",
                "Water resistance": "Water Resistant"
            },
            "category": "Mens",
            "isLimitedDeal": true
        },
        {
            "id": "p_11",
            "title": "Socks",
            "price": 500,
            "discountPercent": 5,
            "description": "Comfortable and breathable socks",
            "mainImage": "https://m.media-amazon.com/images/I/81pdj8cq70L._SX679_.jpg",
            "imageList": [
                "https://m.media-amazon.com/images/I/91CpE-jFsrL._SX679_.jpg",
                "https://m.media-amazon.com/images/I/71iooBkWyAS._SX679_.jpg"
            ],
            "rating": 4.2,
            "details": {
                "Material composition": "Bamboo",
                "Length": "Ankle-Length"
            },
            "category": "Mens",
            "isLimitedDeal": false
        },
        {
            "id": "p_12",
            "title": "Gloves",
            "price": 1500,
            "discountPercent": 10,
            "description": "Warm and durable gloves",
            "mainImage": "https://m.media-amazon.com/images/I/91xJlNRRdUL._SX679_.jpg",
            "imageList": [
                "https://m.media-amazon.com/images/I/819XBKyrHPL._SX679_.jpg",
                "https://m.media-amazon.com/images/I/61nVF6EUpEL.jpg"
            ],
            "rating": 4.3,
            "details": {
                "Material type": "Wool",
                "Care instructions": "NHand Wash"
            },
            "category": "Mens",
            "isLimitedDeal": true
        },
        {
            "id": "p_13",
            "title": "Scarf",
            "price": 1200,
            "discountPercent": 5,
            "description": "Warm and stylish scarf",
            "mainImage": "https://m.media-amazon.com/images/I/61u2aFUw0RL._SY679_.jpg",
            "imageList": [
                "https://m.media-amazon.com/images/I/61UAQGoBs8L.jpg",
                "https://m.media-amazon.com/images/I/51X7yYEjygL.jpg"
            ],
            "rating": 4.0,
            "details": {
                "Material type": "Wool",
                "Pattern": "Embroidered"
            },
            "category": "Mens",
            "isLimitedDeal": false
        },
        {
            "id": "p_14",
            "title": "Tie",
            "price": 900,
            "discountPercent": 10,
            "description": "Elegant and stylish tie",
            "mainImage": "https://m.media-amazon.com/images/I/61FBnxZnSKL._SX522_.jpg",
            "imageList": [
                "https://m.media-amazon.com/images/I/516QJQPWRcL._SX569_.jpg",
                "https://m.media-amazon.com/images/I/51QKo+AtkxL._SX569_.jpg"
            ],
            "rating": 4.1,
            "details": {
                "Material type": "Silk",
                "Care instructions": "Dry Clean Only",
                " Country of Origin": "India"
            },
            "category": "Mens",
            "isLimitedDeal": false
        },
        {
            "id": "p_15",
            "title": "Sweater",
            "price": 3500,
            "discountPercent": 12,
            "description": "Warm and comfortable sweater",
            "mainImage": "https://m.media-amazon.com/images/I/71mDDeJQUnL._SX522_.jpg",
            "imageList": [
                "https://m.media-amazon.com/images/I/71LnKxpq2hS._SX679_.jpg",
                "https://m.media-amazon.com/images/I/71sT16eNYsS._SX679_.jpg"
            ],
            "rating": 4.4,
            "details": {
                "Material type": "Wool",
                "Fit type": "Slim",
                "Neck style": "Turtle Neck"
            },
            "category": "Mens",
            "isLimitedDeal": true
        },
        {
            "id": "p_16",
            "title": "Boots",
            "price": 4500,
            "discountPercent": 15,
            "description": "Durable and stylish boots",
            "mainImage": "https://m.media-amazon.com/images/I/71yQU6viTSL._SY625_.jpg",
            "imageList": [
                "https://m.media-amazon.com/images/I/71vBssNOjiL._SY695_.jpg",
                "https://m.media-amazon.com/images/I/81Y2zlkpa8L._SY695_.jpg"
            ],
            "rating": 4.5,
            "details": {
                "Material type": "Thermoplastic Polyurethane",
                "Closure type": "Lace-Up",
                "Heel type": "Flat",
                "Water resistance level": "Water Resistant"
            },
            "category": "Mens",
            "isLimitedDeal": true
        },
        {
            "id": "p_17",
            "title": "Blazer",
            "price": 8000,
            "discountPercent": 20,
            "description": "Elegant and stylish blazer",
            "mainImage": "https://m.media-amazon.com/images/I/51-d3Fw-FiS._SY741_.jpg",
            "imageList": [
                "https://m.media-amazon.com/images/I/51qq4DM0SrL._SY741_.jpg",
                "https://m.media-amazon.com/images/I/61B5bN1D1wL._SX679_.jpg"
            ],
            "rating": 4.7,
            "details": {
                "Material type": "Polyester Viscose",
                "Style": "Single breasted",
                "Closure type": "Button",
                "Pattern": "Solid"
            },
            "category": "Mens",
            "isLimitedDeal": false
        }
    ]}

    res.send(JSON.stringify(productDetails));


});

module.exports = router;
