
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
    }

    axios.get(templateUrl).then((templtResponse) => {
        console.log("templateResponse :");
        console.log(templtResponse);
        $("main").html(templtResponse.data);
        if (pageType == 'productDetails' || pageType == 'detailedPage') {
            var data = {}
            if(pid){
                data.id = pid;
            }
            getProductDetails(data); // which loads the product details...
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

