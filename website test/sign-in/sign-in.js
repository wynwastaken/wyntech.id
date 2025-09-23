const sign_in_form = document.querySelector('.sign-in-form');
const sign_up_form = document.querySelector('.sign-up-form');


const input_email = document.getElementById('email');
const warning_input_email = document.getElementById('required-emaill');

const input_email2 = document.getElementById('email2');
const warning_input_email2 = document.getElementById('required-emaill2');

const input_password = document.getElementById('password');
const warning_input_password = document.getElementById('length-passwordll');

const input_password2 = document.getElementById('password2');
const warning_input_password2 = document.getElementById('length-passwordl2');

const create_link = document.getElementById('createl');
const login_link = document.querySelector('.cl2');

const click_audio = document.getElementById('click-sound-effect');
const buttons = document.querySelectorAll('.button');

create_link.addEventListener('click',function(){
    if(sign_up_form.classList.contains('switch')){
        sign_in_form.classList.add('switch')
        sign_up_form.classList.remove('switch')
    }
})

login_link.addEventListener('click',function(){
    if(sign_in_form.classList.contains('switch')){
        sign_up_form.classList.add('switch')
        sign_in_form.classList.remove('switch')
    }
})


click_audio.volume = 0.4;
buttons.forEach(function(el){
    el.addEventListener('click',function(){
        click_audio.currentTime = 0;
        click_audio.play();
    })
})

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
input_email.addEventListener('input',function(){
    if(!emailRegex.test(input_email.value.trim())){
        warning_input_email.classList.add('muncul2');
        input_email.classList.add("warning");
    }else{
        warning_input_email.classList.remove('muncul2');
        input_email.classList.remove("warning");
    }
})


input_email2.addEventListener('input',function(){
    if(!emailRegex.test(input_email2.value.trim())){
        warning_input_email2.classList.add('muncul2');
        input_email2.classList.add("warning");
    }else{
        warning_input_email2.classList.remove('muncul2');
        input_email2.classList.remove("warning");

    }
})


input_password.addEventListener('input',function(){
    if(!input_password.value.trim() || input_password.value.trim().length < 8){
        warning_input_password.add('muncul2');
        input_password.add("warning");
    }else{
        warning_input_password.remove('muncul2');
        input_password.remove("warning");
    }
})


