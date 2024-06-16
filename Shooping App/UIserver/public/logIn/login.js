var myfucn = () => {
    var credentials = {}
    credentials.userName = document.querySelector("#eMail").value;
    credentials.userPass = document.querySelector("#password").value;

    
   if(document.querySelector("#check").checked){
    localStorage.setItem("userData",JSON.stringify(credentials));
   } 
   else {
    localStorage.setItem("userData",null);
   }
}

document.addEventListener("DOMContentLoaded", () => {
    if(localStorage.getItem("userData")!= null){
        // console.log("hello");
        priFillData();
        document.querySelector("#check").checked = true;
       
    }
});

var priFillData = () =>  {
    var credentials = localStorage.getItem("userData");
    credentials = JSON.parse(credentials);
    document.querySelector("#eMail").value = credentials.userName;
    document.querySelector("#password").value = credentials.userPass;
}