
const hamburger = document.querySelector('.hamburger');
const menu_bar = document.querySelector('.menu-bar');


const head = document.querySelector('.head');
const click_audio = document.getElementById('click-sound-effect');
const buttons = document.querySelectorAll('.button');


const menu_produk = document.querySelector('.halaman');


const scroll_up = document.querySelector('.scroll-up');
const container_scroll_up = document.querySelector('.container-scroll-up');

let isScrollListenerActive = true;

hamburger.addEventListener('click',function(){
    if(menu_bar.classList.contains('show')){
        menu_bar.classList.remove('show');
    }else{
        menu_bar.classList.add('show');
    }
});




window.addEventListener('scroll',function (){
    if(!isScrollListenerActive) return;
    
    const PositionWindow = window.scrollY;
    const PositionScrollShow = menu_produk.getBoundingClientRect().bottom;
    if(PositionWindow >= PositionScrollShow){
        scroll_up.classList.remove('hilang-smooth');
    }else{
        scroll_up.classList.add('hilang-smooth');
    }
});

scroll_up.addEventListener('click',function(){
    if(!scroll_up.classList.contains('hilang-smooth')){
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
});




click_audio.volume = 0.4;
buttons.forEach(function(el){
    el.addEventListener('mousedown',function(){
        click_audio.currentTime = 0;
        click_audio.play();
    })
});












