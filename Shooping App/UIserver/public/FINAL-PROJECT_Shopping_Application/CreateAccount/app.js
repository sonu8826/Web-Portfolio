var  showPassword = (event) => {
    if(event.target.checked){
        document.querySelector("#uPass").setAttribute("type","text");
    }
    else {
        document.querySelector("#uPass").setAttribute("type","password");
    }
}

function registerUser() {
    if(document.querySelector("#uName").value == '') {
        document.querySelector("#userName").style.display = "block";
        return;
    }
    else {
        document.querySelector("#userName").style.display = "none";
    }
    if(document.querySelector("#uMail").value == '') {
        document.querySelector("#userMail").style.display = "block";
        return;
    }
    else {
        document.querySelector("#userMail").style.display = "none";
    }

    var pass = document.querySelector("#uPass").value;
    var rpass = document.querySelector("#uPass2").value;
        
        var count = '';
        var sCount = '';
        for(i = 0; i<rpass.length; i++){
            count += rpass[i];
        }
        for(j = 0; j<pass.length; j++){
            sCount += pass[j];
        }
        if(count == sCount){
            window.open("../logIn/singup.html", "_self")
            return;
        }else{
            document.querySelector("#pwdErr").style.display = "block";
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
    if (event.key == '#' || event.key == '@' || event.key == '&' || event.key == '^'){
        cnt ++;
    }
    if(cnt == 1){
      document.querySelector("#specialChar").setAttribute("class","set-color");  
    }
    else{
        document.querySelector("#specialChar").removeAttribute("class")
    }

    // var s = document.querySelector("#userPass").value;
    if(event.target.value.charCodeAt(0) >= 65 && event.target.value.charCodeAt(0) <=90 ){
        document.querySelector("#capital").setAttribute("class","set-color");
    }
    else {
        document.querySelector("#capital").removeAttribute("class")
    }
    
    // FOR AT LEAST ONE NUMBER :
    if(event.keyCode >= 48 && event.keyCode <= 57){
        document.querySelector("#validNo").setAttribute("class","set-color");
    }
    else {
        document.querySelector("#validNo").removeAttribute("set-color");
    }

    // for space :
    if(event.keyCode == 32) {
        document.querySelector("#spaceValid").removeAttribute("color");
    }
    else {
        document.querySelector("#spaceValid").setAttribute("class","set-color");
    }
    console.log(event);
}

