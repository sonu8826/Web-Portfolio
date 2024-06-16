var showPassword = (event) => {
    if (event.target.checked) {
        document.querySelector("#signUpaccountPassword").setAttribute("type", "text");
    }
    else {
        document.querySelector("#signUpaccountPassword").setAttribute("type", "password");
    }
}
function registerUser() {
    if (document.querySelector("#signUpaccountId").value == '') {
        document.querySelector("#unameErr").style.display = "block";
        return;
    }
    else {
        document.querySelector("#unameErr").style.display = "none";
    }
    if (document.querySelector("#signUpaccountPassword").value == '') {
        document.querySelector("#pwdEmpty").style.display = "block";
        return;
    }
    else {
        document.querySelector("#pwdEmpty").style.display = "none";
    }
    var pass = document.querySelector("#signUpaccountPassword").value;
    var rpass = document.querySelector("#Re-accountPassword").value;

    if (pass == rpass) {
        $('#loginModel').modal('show'); // problem here
        return;
    } else {
        document.querySelector("#pwdErr").style.display = "block";
    }
}

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
    console.log(event);
}
