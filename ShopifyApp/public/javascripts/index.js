

var loadSelectedPage = (pageType) => {

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
    }

    axios.get(templateUrl).then((templtResponse) => {
        console.log(templtResponse);
        $("main").html(templtResponse.data);
        if (pageType == 'productDetails') {
            getProductDetails(); // which loads the product details...
        }

        modelInstance.hide();
    })
}   

var modelInstance; 
var lgooutModelInstance;
document.addEventListener("DOMContentLoaded", () => {


    modelInstance = new bootstrap.Modal('#loginModel', {});
    lgooutModelInstance = new bootstrap.Modal('#logOutPopup', {});  
    loadSelectedPage('homePage');
})

