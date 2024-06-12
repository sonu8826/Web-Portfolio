var registerUser = () => {

    if(document.querySelector("#uMail").value == '') {
        document.querySelector("#eRequire").style.display = "block";
        return;
    }
    else {
        document.querySelector("#eRequire").style.display = "none";
    }
   showmessage();
}

var showmessage = () => {
    document.querySelector("#checkMail").style.display="block"
}