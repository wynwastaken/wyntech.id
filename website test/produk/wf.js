
const hamburger = document.querySelector('.hamburger');
const menu_bar = document.querySelector('.menu-bar');


const head = document.querySelector('.head');




const menu_produk = document.querySelector('.halaman');


const scroll_up = document.querySelector('.scroll-up');
const container_scroll_up = document.querySelector('.container-scroll-up');

const logout = document.querySelectorAll('.logout-icon');


const carousel_window = document.querySelector('.carousel-window');
const carousel_element = document.querySelectorAll('.card');
const carousel_movable = document.querySelector('.carousel');
const lebar_elemen = carousel_element[0].offsetWidth;
const gap_antar_elemen = parseInt(getComputedStyle(carousel_movable).gap);
const size_geser = lebar_elemen + gap_antar_elemen;
const dots = document.querySelectorAll('.dot');
let index = 0;

function slide(){
  
  if(index >= carousel_element.length){
    index = 0;
    carousel_movable.style.transition = 'none'; 
    carousel_movable.style.transform = `translateX(${index}px)`;
    setTimeout(function(){
      carousel_movable.style.transition = 'transform 0.5s ease';
    },200);
    dots.forEach(function(dot){
      dot.style.backgroundColor = 'gray';
    })
    dots[0].style.backgroundColor = 'white';
    
  }
  if(index>0){
    dots[index-1].style.backgroundColor = 'gray';
    dots[index].style.backgroundColor = 'white';
  }
  
  
  const nilai_geser = -index * size_geser;
  carousel_movable.style.transform = `translateX(${nilai_geser}px)`;
  index++;
}

window.addEventListener('load', () => {
  setInterval(slide, 3000);
});



let isScrollListenerActive = true;

logout.forEach(function(el){
    if (el) {
        el.addEventListener('click', () => {
            window.location.href = "../logout.php";
        });
}
})
hamburger.addEventListener('click',function(){
    if(menu_bar.classList.contains('show')){
        menu_bar.classList.remove('show');
    }else{
        menu_bar.classList.add('show');
    }
});




// window.addEventListener('scroll',function (){
    
//     const PositionWindow = window.scrollY;
//     const PositionScrollShow = last_element.offsetTop ;
//     if(PositionWindow >= PositionScrollShow){
//         scroll_up.classList.add('show2');
//     }else{
//         scroll_up.classList.remove('show2');
//     }
// });


scroll_up.addEventListener('click',function(){
    if(!scroll_up.classList.contains('hilang-smooth')){
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
});


// 3=========================================================================================================D

const wrapper = document.getElementById('tabsDropdown');
const toggle = document.getElementById('ddToggle');
const menu = document.getElementById('ddMenu');
const items = Array.from(menu.querySelectorAll('.dropdown-item'));
  

function closeMenu() {
  wrapper.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}
  
function openMenu() {
  wrapper.classList.add('open');
  toggle.setAttribute('aria-expanded', 'true');
}

toggle.addEventListener('click', (e) => {
  e.stopPropagation();
  wrapper.classList.contains('open') ? closeMenu() : openMenu();
});


items.forEach(item => {
  item.addEventListener('click', (ev) => {
    closeMenu();
  });
});
