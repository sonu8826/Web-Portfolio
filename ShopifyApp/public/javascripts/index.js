
var loadSelectedPage = (pageType, pid) => {

    if (pageType == 'homePage') {
        $("#loginBtn").show();
        $("#singupBtn").show();
        $("#logoutBtn").hide();
    } else {
        $("#loginBtn").hide();
        $("#singupBtn").hide();
        $("#logoutBtn").show();
    }
    
    var templateUrl = ''; 
    switch (pageType) {
        case 'homePage':
            templateUrl = 'templates/homePage.htm';
            // enable login and signup buttons and hide logout button
            break;
        case 'productDetails':
            // hide login and signup buttons and enable logout button
            templateUrl = 'templates/productDetails.htm';
            break;
        case  'detailedPage':
            templateUrl = 'templates/detailedProduct.htm';
            break;
        case 'addTocart':
            templateUrl = 'templates/addToCart.htm';
            break;
    }


    axios.get(templateUrl).then((templtResponse) => {
        if (pageType == 'productDetails' || pageType == 'detailedPage') {
            if (pageType == 'detailedPage') {
                // var productdata = {};
                $("main").html(templtResponse.data);
                axios.get('/load/productDetails', {params: {id: pid}}).then((response) => {
                    var detaildTmplt = Handlebars.compile(templtResponse.data);
                    $("main").html(detaildTmplt(response.data.pdata[0]));
                });
            } else {
                $("main").html(templtResponse.data);
            }
            var data = {};
            if (pid) {
                data.id = pid;
                // console.log(data);
            }
            getProductDetails(data); // which loads the product details...
        } else {
            $("main").html(templtResponse.data);
        }
        modelInstance.hide();
    })
}   

var modelInstance; 
var lgooutModelInstance;
document.addEventListener("DOMContentLoaded", () => {
    modelInstance = new bootstrap.Modal('#loginModel', {});
    lgooutModelInstance = new bootstrap.Modal('#logOutPopup', {}); 
    
    axios.get("/check/userLogin").then((response) => {
        if(response.data.isLoggedinUser){
            loadSelectedPage('productDetails');
        }
        else {
            loadSelectedPage('homePage');
        }
    })
    // loadSelectedPage('homePage');
})

