
var accountDetails = {}

var RegisterUser = () => {
    document.querySelector("#msg").style.display = "block";
    
    //TRIM METHOD FOR REMOVING THE SPACE
    
    
    //FOR USERNAME :
     
    if (document.querySelector("#userId").value == ''){
        document.querySelector("#uName").style.display = "block";
        document.querySelector("#uName").style.color = "red";
        document.querySelector("#msg").style.display = "none";
        return ;
    }
    else {
        document.querySelector("#uName").style.display = "none";
    }
    //FOR PASSWORD
    if (document.querySelector("#userPass").value == ''){
        document.querySelector("#uPass").style.display = "block";
        document.querySelector("#uPass").style.color = "red ";
        document.querySelector("#msg").style.display = "none";
        return ;
    }
    else {
        document.querySelector("#uPass").style.display = "none";
       
    }
    //FOR EMAIL
    if (document.querySelector("#userMailid").value == ''){
        document.querySelector("#uMail").style.display = "block";
        document.querySelector("#uMail").style.color = "red";
        document.querySelector("#msg").style.display = "none";
        return ;
    }
    else {
        document.querySelector("#uMail").style.display = "none";
    }
}
var validateSpace = (event) => {
    // console.log(event);
    if(event.keyCode == 32){
        return false;
    }
    else {
        return true;
    }
}

var showrule = () => {
    document.querySelector(".valid-list").style.display = "block";
}
// PASSWORD VALIDATION :
var cnt = 0;
var checkValidation = (event) => {
    // LENGTH VALIDATION
    if(event.target.value.length == 8){
        document.querySelector("#validlength").setAttribute("class","set-color");
    }
    else {
        document.querySelector("#validlength").removeAttribute("class");
    }
    // SPECIEAL CHARACTER VALIDATION:
    if (event.keyCode == 54 || event.keyCode == 51 || event.keyCode == 50 || event.keyCode == 55){
        cnt ++;
    }
    if(cnt == 1){
      document.querySelector("#specialChar").setAttribute("class","set-color");  
    }
    else{
        document.querySelector("#specialChar").removeAttribute.classList.remove("set-color");
    }
    // var s = document.querySelector("#userPass").value;
    if(event.target.value.charCodeAt(0) >= 65 && event.target.value.charCodeAt(0) <=90 ){
        document.querySelector("#capital").setAttribute("class","set-color");
    }
    else {
        document.querySelector("#capital").removeAttribute.classList.remove("set-color");
    }
    
    // FOR AT LEAST ONE NUMBER :
    // if(event.keyCode >= 48 && event.keyCode <= 57){
    //     document.querySelector("#validNo").setAttribute("class","set-color");
    // }
    // else {
    //     document.querySelector("#validNo").removeAttribute.classList.remove("set-color");
    // }
    if(event.keyCode == 32) {
        document.querySelector("#spaceValid").removeAttribute.classList.remove("set-color");
    }
    else {
        document.querySelector("#spaceValid").setAttribute("class","set-color");
    }
}
// FOR SHOW PASSWORD :
var  ChangeType = (event) => {
    if(event.target.checked){
        document.querySelector("#userPass").setAttribute("type","text");
    }
    else {
        document.querySelector("#userPass").setAttribute("type","password");
    }
}