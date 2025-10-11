const sign_in_form = document.querySelector('.sign-in-form');



const input_email = document.getElementById('email');
const warning_input_email = document.getElementById('required-emaill');



const input_password = document.getElementById('password');
const warning_input_password = document.getElementById('length-passwordl');



const show = document.querySelector('.show-icon');







const submit_sign_in = document.getElementById('nav-sign-in');





const form1 = document.querySelector('.form');


let emailCorrect1 = false;
let passwordCorrect1 = false;


function updateButtonStates() {
    submit_sign_in.disabled = !(emailCorrect1 && passwordCorrect1);
    
}




    show.addEventListener('click',function(){
    if(input_password.type === "password"){
        show.src = "show.png"
        input_password.type = "text";
        
    }else{
        show.src = "unshow.png";
        input_password.type = "password";
        
        }
    });






const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
input_email.addEventListener('input',function(){
    if(!emailRegex.test(input_email.value.trim())){
        warning_input_email.classList.add('muncul2');
        input_email.classList.add("warning");
        emailCorrect1 = false;
    }else{
        warning_input_email.classList.remove('muncul2');
        input_email.classList.remove("warning");
        emailCorrect1 = true;
    }
    updateButtonStates();
});







input_password.addEventListener('input',function(){
    if(!input_password.value.trim() || input_password.value.trim().length < 8){
        warning_input_password.classList.add('muncul2');
        input_password.classList.add("warning");
        passwordCorrect1 = false;
    }else{
        warning_input_password.classList.remove('muncul2');
        input_password.classList.remove("warning");
        passwordCorrect1 = true;
    }
    updateButtonStates();
});








