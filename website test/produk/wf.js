
const hamburger = document.querySelector('.hamburger');
const menu_bar = document.querySelector('.menu-bar');


const head = document.querySelector('.head');




const menu_produk = document.querySelector('.halaman');


const scroll_up = document.querySelector('.scroll-up');
const container_scroll_up = document.querySelector('.container-scroll-up');

const logout = document.querySelector('.logout-icon');


// const last_element = document.querySelector('.isi');
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
















