const hamburger = document.querySelector('.hamburger');
const menu_bar = document.querySelector('.menu-bar');
const sign_ins = document.querySelectorAll('.sign-in');
const head = document.querySelector('.head');
const click_audio = document.getElementById('click-sound-effect');
const buttons = document.querySelectorAll('.button');
const sign_in_page =document.querySelector('.sign-in-page');
const sign_in_form = document.querySelector('.sign-in-form');
const warning_username = document.getElementById('required-usernamel');
const warning_password = document.getElementById('length-passwordl');
const input_username = document.getElementById('username');
const input_password = document.getElementById('password');
const  show = document.querySelectorAll('.show-icon');
const create_link = document.getElementById('createl');
const sign_up_form = document.querySelector('.sign-up-form');

hamburger.addEventListener('click',function(){
    if(menu_bar.classList.contains('show')){
        menu_bar.classList.remove('show');
    }else{
        menu_bar.classList.add('show');
    }
});

sign_ins.forEach(function(el){
    el.addEventListener('click',function(){
        head.classList.add('hilang');
        menu_bar.classList.add('hilang');
        sign_in_page.classList.add('muncul');
    })
});



click_audio.volume = 0.4;
buttons.forEach(function(el){
    el.addEventListener('mousedown',function(){
        click_audio.currentTime = 0;
        click_audio.play();
    })
});

input_username.addEventListener('input',function(){
    if(!input_username.value.trim()){
        warning_username.classList.add('muncul2');
        input_username.classList.add('warning');
    }else{
        warning_username.classList.remove('muncul2');
        input_username.classList.remove('warning');
    }
});


input_password.addEventListener('input',function(){
    if(!input_password.value.trim() || input_password.value.trim().length < 8){
        warning_password.classList.add('muncul2');
        input_password.classList.add('warning');
    }else{
        warning_password.classList.remove('muncul2');
        input_password.classList.remove('warning');
    }
    });


show.forEach(function(el){
    el.addEventListener('click',function(){
    if(input_password.type === "password"){
        input_password.type = "text";
        show.src = "unshow.png";
    }else{
        input_password.type = "password";
        show.src = "show.png";
    }
    });
})


create_link.addEventListener('click',function(){
    sign_in_form.classList.add('hilang');
    sign_up_form.classList.add('muncul');
});

