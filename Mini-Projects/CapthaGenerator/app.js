
var lowerCase = () =>{
    var max = 122;
    var min = 97
    var randome = Math.random() * (max - min) + min;
    randome = Math.round(randome);
   return String.fromCharCode(randome);
}
// console.log(lowerCase());

var upperCase = () => {
    var max = 90;
    var min = 65;
    var randome = Math.random() * (max - min) + min;
    randome = Math.round(randome);
    return String.fromCharCode(randome);
}
// console.log(upperCase());

var number = () => {
   return Math.round(Math.random()*9);
}

// var pattern = upper + no + lowercase + n + upper
// console.log(number());
var fetchCaptcha = () => {
var pattern = upperCase() + number() + lowerCase() + number() + upperCase();
document.querySelector("#showCaptcha").innerHTML = pattern;
}