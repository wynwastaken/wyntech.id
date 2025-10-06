const sign_in_form = document.querySelector('.sign-in-form');
const sign_up_form = document.querySelector('.sign-up-form');


const input_email = document.getElementById('email');
const warning_input_email = document.getElementById('required-emaill');

const input_email2 = document.getElementById('email2');
const warning_input_email2 = document.getElementById('required-emaill2');

const input_password = document.getElementById('password');
const warning_input_password = document.getElementById('length-passwordl');


const input_password2 = document.getElementById('password2');
const warning_input_password2 = document.getElementById('length-passwordl2');

const shows_toggle = document.querySelectorAll('.show-icon');

const input_username = document.getElementById('username2');
const warning_input_username = document.getElementById('required-usernamel2');



const create_link = document.getElementById('createl');
const login_link = document.querySelector('.cl2');
const submit_sign_up = document.getElementById('nav-sign-up');


const buttons = document.querySelectorAll('.button');

const form1 = document.querySelector('.form');
const form2 = document.querySelector('.form2');

let emailCorrect1 = false;
let passwordCorrect1 = false;
let emailCorrect2 = false;
let passwordCorrect2 = false;
input_username.addEventListener('input',function(){
    if(!input_username.value.trim()){
        input_username.classList.add('warning');
        warning_input_username.classList.add('muncul2');
    }else{
        input_username.classList.remove('warning');
        warning_input_username.classList.remove('muncul2');
    }
})

shows_toggle.forEach(function(show){
    show.addEventListener('click',function(){
    if(input_password.type === "password" || input_password2.type === "password"){
        show.src = "show.png"
        input_password.type = "text";
        input_password2.type = "text";
    }else{
        show.src = "unshow.png";
        input_password.type = "password";
        input_password2.type = "password";
    }
})
})

create_link.addEventListener('click',function(){
    if(sign_up_form.classList.contains('switch')){
        sign_in_form.classList.add('switch');
        sign_up_form.classList.remove('switch');
        input_password.classList.remove('warning');
        warning_input_password.classList.remove('muncul2');
        warning_input_email.classList.remove('warning');
        input_email.classList.remove('warning');
    }
})

login_link.addEventListener('click',function(){
    if(sign_in_form.classList.contains('switch')){
        sign_up_form.classList.add('switch');
        sign_in_form.classList.remove('switch');
        input_password2.classList.remove('warning');
        warning_input_password2.classList.remove('muncul2');
        warning_input_username.classList.remove('muncul2');
        warning_input_email2.classList.remove('muncul2');
        input_username.classList.remove('warning');
        input_email2.classList.remove('warning');

    }
})



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
});



input_email2.addEventListener('input',function(){
    if(!emailRegex.test(input_email2.value.trim())){
        warning_input_email2.classList.add('muncul2');
        input_email2.classList.add("warning");
        emailCorrect2 = false;
        
    }else{
        warning_input_email2.classList.remove('muncul2');
        input_email2.classList.remove("warning");
        fetch("cekused.php",{
        method:"POST",
        body: new URLSearchParams({email:input_email2.value.trim().toLowerCase()})
        }).then(function(balasan){
            return balasan.text();
        }).then(function(balasan){
            console.log("balasan dari server",balasan);
            if(balasan.trim() == "ada"){
                warning_input_email2.textContent = "This email is already registered";
                warning_input_email2.classList.add('muncul2');
                input_email2.classList.add("warning");
                emailCorrect2 = false;
                
            }else if(balasan.trim() == "tidak_ada"){
                submit_sign_up.disabled = false;
                warning_input_email2.textContent = "Email must be a valid email";
                warning_input_email2.classList.remove('muncul2');
                input_email2.classList.remove("warning");
                emailCorrect2 = true;
            }
            
        });
        

    }
    
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
});



input_password2.addEventListener('input',function(){
    if(!input_password2.value.trim() || input_password2.value.trim().length < 8){
        warning_input_password2.classList.add('muncul2');
        input_password2.classList.add('warning');
        passwordCorrect2 = false;
    }else{
        warning_input_password2.classList.remove('muncul2');
        input_password2.classList.remove('warning');
        passwordCorrect2 = true;
    }
});


form1.addEventListener('submit',function(e){
    e.preventDefault();
    if(emailCorrect1 && passwordCorrect1){
        form1.submit();
    }
    
})

form2.addEventListener('submit',function(e){
    e.preventDefault();
    
    if(emailCorrect2 && passwordCorrect2){
        form2.submit();
    }
    
    
})

