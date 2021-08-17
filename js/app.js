let signupForm = document.querySelector(".signUpForm");
let notifyButton = document.querySelector("#notify");
let inputEmail = document.querySelector("#email");
let message = document.querySelector(".message");
let paramEmail = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

notifyButton.addEventListener('click', e => {
    e.preventDefault();

    if(paramEmail.test(inputEmail.value)){
        signupForm.reset();
        inputEmail.style.border = "1px solid hsl(0, 0%, 59%)"
        message.style.display = "none";
        console.log("Email valid!");
    } else{
        inputEmail.style.border = "2px solid hsl(354, 100%, 66%)"
        message.style.display = "block";

    }
});