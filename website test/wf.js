const hamburger = document.querySelector('.hamburger');
const menu_bar = document.querySelector('.menu-bar');
const sign_ins = document.querySelectorAll('.sign-in');
const head = document.querySelector('.head');
const click_audio = document.getElementById('click-sound-effect');
const buttons = document.querySelectorAll('.button');
const sign_in_page =document.querySelector('.sign-in-page');
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
})