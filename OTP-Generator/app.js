var optGenerate = () => {
    var otpvalue = '';
    for(var i =0; i < 4 ; i++){
       otpvalue += getRandome();
    }
    document.querySelector("#showOtp").innerHTML = otpvalue;
}

var getRandome = () => {
    return Math.floor(Math.random() * 9);
}