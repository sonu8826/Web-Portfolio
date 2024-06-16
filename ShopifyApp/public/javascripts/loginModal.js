var readUserDetails = () => {
    var credentials = {}
    credentials.userName = document.querySelector("#accountId").value;
    credentials.userPass = document.querySelector("#accountPassword").value;
    console.log(credentials);
    
   if(document.querySelector("#checkbox").checked){
    localStorage.setItem("userData",JSON.stringify(credentials));
   } 
   else {
    localStorage.setItem("userData",null);
   }
   validateUserCredentials(credentials);
}
document.addEventListener("DOMContentLoaded", () => { 
    if(localStorage.getItem("userData")!= null){
        // console.log("hello");
        priFillData();
        document.querySelector("#checkbox").checked = true;
       
    }
});
var priFillData = () =>  {
    var credentials = localStorage.getItem("userData");
    credentials = JSON.parse(credentials);
    document.querySelector("#accountId").value = credentials.userName;
    document.querySelector("#accountPassword").value = credentials.userPass;
}

var validateUserCredentials = (userDetails) => {

    axios.post('/validate/userCredentials', userDetails).then((response) => {
        if (response.data.msg == 'Invalid') {
            $("#errMsgBlock").text("Invalid Credentials....");
        } else {
            loadSelectedPage('productDetails');
        }
    }).catch((err) => {
        
    });;

}