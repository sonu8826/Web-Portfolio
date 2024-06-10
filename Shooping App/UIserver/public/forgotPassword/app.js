var registerUser = () => {

    if(document.querySelector("#uMail").value == '') {
        document.querySelector("#eRequire").style.display = "block";
        return;
    }
    else {
        document.querySelector("#eRequire").style.display = "none";
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