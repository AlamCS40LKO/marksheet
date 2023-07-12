const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');

const name_error = document.getElementById('name_error');
const email_error = document.getElementById('email_error');
const password_error = document.getElementById('password_error');

form.addEventListener('submit',(e)=>{

    var email_check = "~`!@#$%^&*()-_+={}[]|\;:\" [0-9][A-Z][a-z]";

    if(name.value=== '' || name.value==null){
        e.preventDefault();
        name_error.innerHTML="Name is Required";
    }
    if(!email.value.match(email_check)){
        e.preventDefault();
        email_error.innerHTML="Valid email is Required";
    }
    if(password.value.length <=5){
        e.preventDefault();
        password_error.innerHTML="password must be more than 6 Characters";
    }
    if(password.value.length >=5){
        e.preventDefault();
        password_error.innerHTML="password must be more than 20 Characters";
    }
    if(password.value.length ==="password"){
        e.preventDefault();
        password_error.innerHTML="password can not be password";
    }

})