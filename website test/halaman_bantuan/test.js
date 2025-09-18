const hamburger = document.querySelector('.hamburger');
const menu_bar = document.querySelector('.menu-bar');
const menu_head = document.querySelector('.head-menu');
const sign_ins = document.querySelectorAll('.sign-in');
const head = document.querySelector('.head');
const click_audio = document.getElementById('click-sound-effect');
const buttons = document.querySelectorAll('.button');
const sign_in_page =document.querySelector('.sign-in-page');
const sign_in_form = document.querySelector('.sign-in-form');
const warning_password = document.getElementById('length-passwordl');
const warning_username2 = document.getElementById('required-usernamel2');
const warning_password2 = document.getElementById('length-passwordl2');
const input_password = document.getElementById('password');
const input_username2 = document.getElementById('username2');
const input_password2 = document.getElementById('password2');
const input_email = document.getElementById('email');
const warning_email = document.getElementById('required-emaill');
const input_email2 = document.getElementById('email2');
const warning_email2= document.getElementById('required-emaill2');
const  show = document.querySelectorAll('.show-icon');
const create_link = document.getElementById('createl');
const sign_up_form = document.querySelector('.sign-up-form');
const return_arrow1 = document.querySelector('.back1');
const menu_produk = document.querySelector('.halaman');
const already_have = document.querySelector('.cl2');

const scroll_up = document.querySelector('.scroll-up');
const container_scroll_up = document.querySelector('.container-scroll-up');

let isScrollListenerActive = true;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
input_email.addEventListener('input', function () {
  if (!emailRegex.test(input_email.value.trim())) {
    warning_email.classList.add('muncul2');
    input_email.classList.add("warning");
  } else {
    
    warning_email.classList.remove('muncul2');
    input_email.classList.remove("warning");
  }
});
input_email2.addEventListener('input', function () {
  if (!emailRegex.test(input_email2.value.trim())) {
    warning_email2.classList.add('muncul2');
    input_email2.classList.add("warning");
  } else {
    
    warning_email2.classList.remove('muncul2');
    input_email2.classList.remove("warning");
  }
});

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

sign_ins.forEach(function(el){
    el.addEventListener('click',function(){
        menu_produk.classList.add('hilang-smooth');
        container_scroll_up.classList.add('hilang-smooth');
        isScrollListenerActive = false;
        document.body.style.overflowY = 'hidden'; 
        setTimeout(function() {
            menu_produk.classList.add('hilang');
            sign_in_page.classList.add('muncul');
        }, 100);
    })
});



click_audio.volume = 0.4;
buttons.forEach(function(el){
    el.addEventListener('mousedown',function(){
        click_audio.currentTime = 0;
        click_audio.play();
    })
});




input_username2.addEventListener('input',function(){
    if(!input_username2.value.trim()){
        warning_username2.classList.add('muncul2');
        input_username2.classList.add('warning');
    }else{
        warning_username2.classList.remove('muncul2');
        input_username2.classList.remove('warning');
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
input_password2.addEventListener('input',function(){
    if(!input_password2.value.trim() || input_password2.value.trim().length < 8){
        warning_password2.classList.add('muncul2');
        input_password2.classList.add('warning');
    }else{
        warning_password2.classList.remove('muncul2');
        input_password2.classList.remove('warning');
    }
    });

    
    


show.forEach(function(el){
    el.addEventListener('click',function(){
    if(input_password.type === "password"){
        input_password.type = "text";
        input_password2.type = "text";
        el.src = "unshow.png";
    }else{
        input_password.type = "password";
        input_password2.type = "password";
        el.src = "show.png";
    }
    })
});


create_link.addEventListener('click',function(){
    sign_in_form.classList.add('hilang');
    sign_up_form.classList.add('muncul');
});

already_have.addEventListener('click',function(){
    sign_in_form.classList.remove('hilang');
    sign_up_form.classList.remove('muncul');
});


return_arrow1.addEventListener('click',function(){
    container_scroll_up.classList.remove('hilang-smooth');
    isScrollListenerActive = true;
    sign_in_page.classList.remove('muncul');
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


