var showPassword = (event) => {
    if (event.target.checked) {
        document.querySelector("#signUpaccountPassword").setAttribute("type", "text");
    }
    else {
        document.querySelector("#signUpaccountPassword").setAttribute("type", "password");
    }
}

var userDetails = {}
function registerUser() {
    userDetails.userName = document.querySelector("#signUpaccountId").value;
    userDetails.userPass = document.querySelector("#signUpaccountPassword").value;
    userDetails.mailId = document.querySelector("#Email").value;
    if (userDetails.userName == '') {
        document.querySelector("#unameErr").style.display = "block";
        return;
    }
    else {
        document.querySelector("#unameErr").style.display = "none";
    }
    if (userDetails.userPass == '') {
        document.querySelector("#pwdEmpty").style.display = "block";
        return;
    }
    else {
        document.querySelector("#pwdEmpty").style.display = "none";
    }
    // userDetails.userPass = document.querySelector("#signUpaccountPassword").value;
    var rpass = document.querySelector("#Re-accountPassword").value;

    if (userDetails.userPass == rpass) {
        // // $('#SignUp').modal('hide');
        // // $('#loginModel').modal('show'); // problem here
        // window.open("./index.html","_self");
        // $('#loginModel').modal('show');
        // return;
        // alert("sending data to server...")
        axios.post("/newUser/signup", userDetails).then((result)=>{
            console.log(result);
        }).catch((err)=>{
            console.log(err);
        });
        var successMsg = document.querySelector("#msgRegisterSuccses");
        successMsg.style.display = 'block';

    } else {
        document.querySelector("#pwdErr").style.display = "block";
    }
}
// console.log(userDetails);

// Pasword validation :
var showrule = () => {
    document.querySelector(".valid-list").style.display = "block";
}
// PASSWORD VALIDATION :
var cnt = 0;
var checkValidation = (event) => {
    // LENGTH VALIDATION
    if (event.target.value.length == 8) {
        document.querySelector("#validlength").setAttribute("class", "set-color");
    }
    else {
        document.querySelector("#validlength").removeAttribute("class");
    }

    // SPECIEAL CHARACTER VALIDATION:
    if (event.key == '#' || event.key == '@' || event.key == '&' || event.key == '^') {
        cnt++;
    }
    if (cnt == 1) {
        document.querySelector("#specialChar").setAttribute("class", "set-color");
    }
    else {
        document.querySelector("#specialChar").removeAttribute("class")
    }

    // var s = document.querySelector("#userPass").value;
    if (event.target.value.charCodeAt(0) >= 65 && event.target.value.charCodeAt(0) <= 90) {
        document.querySelector("#capital").setAttribute("class", "set-color");
    }
    else {
        document.querySelector("#capital").removeAttribute("class")
    }

    // FOR AT LEAST ONE NUMBER :
    if (event.keyCode >= 48 && event.keyCode <= 57) {
        document.querySelector("#validNo").setAttribute("class", "set-color");
    }
    else {
        document.querySelector("#validNo").removeAttribute("set-color");
    }

    // for space :
    if (event.keyCode == 32) {
        document.querySelector("#spaceValid").removeAttribute("color");
    }
    else {
        document.querySelector("#spaceValid").setAttribute("class", "set-color");
    }
    // console.log(event);
}
