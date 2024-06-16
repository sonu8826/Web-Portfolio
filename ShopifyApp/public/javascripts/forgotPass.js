
var forgotPassword = () => {
    var mail = document.querySelector("#mailId").value;
    var errormsg = document.querySelector("#mailErr")
    if (mail == '') {
        errormsg.style.display = 'block';
        return;
    }
    else {
        errormsg.style.display = 'none';
        document.querySelector("#mailSent").style.display = "block";
    }
}