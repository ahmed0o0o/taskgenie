let form = document.getElementById("Sign-up");
let signUp = document.querySelector(".submitf");
let finput1 = document.querySelectorAll("#Sign-up input:nth-of-type(1)");
form.onsubmit = function(e){
    if(!form.checkValidity()){
        e.preventDefault();
        form.classList.add("was-validated");
    }
};
