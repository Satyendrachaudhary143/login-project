
var log = document.getElementById("login_link");
var sig = document.getElementById("Sign_link");
var loginmain = document.getElementById("logindiv");
var signmain = document.getElementById("signupdiv")


function logj(){
    signmain.style.display ="none";
    loginmain.style.display="block";
}

function sigj(){
    loginmain.style.display="none";
    signmain.style.display="block";
}