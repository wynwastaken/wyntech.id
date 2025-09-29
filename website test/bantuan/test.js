const hamburger = document.querySelector('.hamburger');
const menu_bar = document.querySelector('.menu-bar');


const menu_produk = document.querySelector('.halaman');
const already_have = document.querySelector('.cl2');


const scroll_up = document.querySelector('.scroll-up');
const container_scroll_up = document.querySelector('.container-scroll-up');
const last_element = document.querySelector('.isi');

const logout = document.querySelector('.logout-icon');
if (logout) {
    logout.addEventListener('click', () => {
        window.location.href = "../logout.php";
    });
}

hamburger.addEventListener('click',function(){
    if(menu_bar.classList.contains('show')){
        menu_bar.classList.remove('show');
    }else{
        menu_bar.classList.add('show');
    }
    
});




window.addEventListener('scroll',function (){
    
    const PositionWindow = window.scrollY;
    const PositionScrollShow = last_element.offsetTop ;
    if(PositionWindow >= PositionScrollShow){
        scroll_up.classList.add('show2');
    }else{
        scroll_up.classList.remove('show2');
    }
});





scroll_up.addEventListener('click',function(){
    if(scroll_up.classList.contains('show2')){
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
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



