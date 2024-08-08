let login= document.querySelector("#login-form");
let sign= document.querySelector("#signup-form")

let signUpBtn= document.querySelector("#signup-toggle");
let loginBtn= document.querySelector("#login-toggle");

loginBtn.addEventListener("click", function(){
    sign.style.display="none";
    login.style.display="block";
})




signUpBtn.addEventListener("click", function(){
    login.style.display="none";
    sign.style.display="block";
})