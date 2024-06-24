var singleProductTempalte;

axios.get("templates/singleProductTemplate.htm").then((responseTemplate) => {
    singleProductTempalte = Handlebars.compile(responseTemplate.data);
}).catch((err) => {
        
});
var getProductDetails = (filterObj={}) => {
    $("#productDetailsBlock").html("");
    var productDetails = [];

    axios.get('/load/productDetails',{params:filterObj}).then((response) => {
        productDetails = response.data.pdata;
        productDetails.forEach((product, index) => {
            product.description = product.description.substr(0, 100) + '...';
            product.discountedPrice = product.price - (product.price * product.discountPercent) / 100;
            $("#productDetailsBlock").append(singleProductTempalte(product));
            var id = `#product_${product.id}`;
            // loadStarRatings(id, product.rating);
        })
    });

}

var updatePrice = (value) => {
    var static = document.querySelector("#staticPrice");
    static.style.display = 'none';
    var dynamic = document.querySelector("#priceRange");
    dynamic.innerHTML = value;
    dynamic.style.display = "block";
}

var applyFilter  = () => {
    var filterObj = {}
    filterObj.priceRange = parseInt($("#priceRange").val());
    filterObj.selectedCategory = [];
   
    var selectedCategorys = document.querySelectorAll("[id^=category_]:checked");
    selectedCategorys.forEach((element)=>{
       filterObj.selectedCategory.push(element.value.toLowerCase()); //
    })
    console.log(filterObj);
    getProductDetails(filterObj)
}

var viewDetailedProduct = (productId) => {
    loadSelectedPage('detailedPage',productId);
}

