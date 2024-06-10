var productData = [];

var productTemplate='';

var loadProductDetails = (data) => {
    // data.id = 'rating_block_' + index;
    // data.discountPrice = data.price - (data.price * data.discountPercent) / 100;
    $(".right").append(productTemplate(data));

    // loadStarRatings("#" + data.id, data.rating);
}

document.addEventListener("DOMContentLoaded", () => {

    productTemplate = Handlebars.compile(document.querySelector("#dynamicCards").innerHTML);


    var dataUrl = '/get/productDetails';
    axios.get(dataUrl)
        .then(function (response) {
            // handle success
            // console.log(response);
            productData = response.data.pData;
            console.log(productData);
            for (var i = 0 ; i < productData.length; i++) {
                loadProductDetails(productData[i]);
            }
        }).catch(function (error) {
            // handle error
            console.log(error);
        });

    
})