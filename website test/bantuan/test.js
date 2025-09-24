const hamburger = document.querySelector('.hamburger');
const menu_bar = document.querySelector('.menu-bar');
const menu_head = document.querySelector('.head-menu');

const head = document.querySelector('.head');
const click_audio = document.getElementById('click-sound-effect');
const buttons = document.querySelectorAll('.button');



const return_arrow1 = document.querySelector('.back1');
const menu_produk = document.querySelector('.halaman');
const already_have = document.querySelector('.cl2');

const scroll_up = document.querySelector('.scroll-up');
const container_scroll_up = document.querySelector('.container-scroll-up');

let isScrollListenerActive = true;

hamburger.addEventListener('click',function(){
    if(menu_head.classList.contains('show')){
        menu_head.classList.remove('show');
    }else{
        menu_head.classList.add('show');
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





return_arrow1.addEventListener('click',function(){
    container_scroll_up.classList.remove('hilang-smooth');
    isScrollListenerActive = true;
    document.body.style.overflowY = 'auto'; 
    setTimeout(function() {
        menu_produk.classList.remove('hilang');
        menu_produk.classList.remove('hilang-smooth');
    }, 50);
});




const kotakList = document.querySelectorAll('.kotak_tanya');





//dapetin smua elemen jawaban yg dii class kotak_tanya
function getJawabanFor(kotak){
    const next = kotak.nextElementSibling;

    if(next !== null && next.classList.contains('jawaban')){
        return next;
    }
    else{
        return null;
    }
}

//3===================================D

function closeKotak(kotak){
    const jawaban = getJawabanFor(kotak);
    kotak.classList.remove('open');
    kotak.setAttribute('aria-expanded', 'false');
    
    //animasi tutup
    if(jawaban){
        jawaban.style.maxHeight = '0px'; //biar balik ke posisi nutup
        jawaban.style.opacity = '0';//biar ada transisi ngilang dikit
    }
}

function openKotak(kotak){
    const jawaban = getJawabanFor(kotak);
    kotak.classList.add('open');
    kotak.setAttribute('aria-expended', 'true');

    if(jawaban){

        jawaban.style.maxHeight = '0px';

        requestAnimationFrame(() => {
            jawaban.style.maxHeight = jawaban.scrollHeight + 'px';
            jawaban.style.opacity = '1';
        });

    }
}

//3===================================D

function toggleKotak(kotak){
    const isOpen = kotak.classList.contains('open');

    //biar yg lain nutup
    kotakList.forEach(k => {
      if (k !== kotak) closeKotak(k);
    });

    if(isOpen){
        closeKotak(kotak);
    }else{
        openKotak(kotak);
    }
}

//3===================================D

kotakList.forEach(kotak => {

    const jawaban = getJawabanFor(kotak);
    
    if(jawaban){
        jawaban.style.maxHeight = '0px';
        jawaban.style.opacity = '0';
    }

    kotak.addEventListener('click', (e) =>{
        toggleKotak(kotak);
    })

})


