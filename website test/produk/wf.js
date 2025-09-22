
const hamburger = document.querySelector('.hamburger');
const menu_bar = document.querySelector('.menu-bar');
const menu_head = document.querySelector('.head-menu');

const head = document.querySelector('.head');
const click_audio = document.getElementById('click-sound-effect');
const buttons = document.querySelectorAll('.button');

const return_arrow1 = document.querySelector('.back1');
const menu_produk = document.querySelector('.halaman');


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
    sign_in_page.classList.remove('muncul');
    document.body.style.overflowY = 'auto'; 
    setTimeout(function() {
        menu_produk.classList.remove('hilang');
        menu_produk.classList.remove('hilang-smooth');
    }, 50);
});


// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// input_email.addEventListener('input', function () {
//   if (!emailRegex.test(input_email.value.trim())) {
//     warning_email.classList.add('muncul2');
//     input_email.classList.add("warning");
//   } else {
    
//     warning_email.classList.remove('muncul2');
//     input_email.classList.remove("warning");
//   }
// });
// input_email2.addEventListener('input', function () {
//   if (!emailRegex.test(input_email2.value.trim())) {
//     warning_email2.classList.add('muncul2');
//     input_email2.classList.add("warning");
//   } else {
    
//     warning_email2.classList.remove('muncul2');
//     input_email2.classList.remove("warning");
//   }
// });








// sign_ins.forEach(function(el){
//     el.addEventListener('click',function(){
//         menu_produk.classList.add('hilang-smooth');
//         container_scroll_up.classList.add('hilang-smooth');
//         isScrollListenerActive = false;
//         document.body.style.overflowY = 'hidden'; 
//         setTimeout(function() {
//             menu_produk.classList.add('hilang');
//             sign_in_page.classList.add('muncul');
//         }, 100);
//     })
// });



// click_audio.volume = 0.4;
// buttons.forEach(function(el){
//     el.addEventListener('mousedown',function(){
//         click_audio.currentTime = 0;
//         click_audio.play();
//     })
// });




// input_username2.addEventListener('input',function(){
//     if(!input_username2.value.trim()){
//         warning_username2.classList.add('muncul2');
//         input_username2.classList.add('warning');
//     }else{
//         warning_username2.classList.remove('muncul2');
//         input_username2.classList.remove('warning');
//     }
// });



// input_password.addEventListener('input',function(){
//     if(!input_password.value.trim() || input_password.value.trim().length < 8){
//         warning_password.classList.add('muncul2');
//         input_password.classList.add('warning');
//     }else{
//         warning_password.classList.remove('muncul2');
//         input_password.classList.remove('warning');
//     }
//     });
// input_password2.addEventListener('input',function(){
//     if(!input_password2.value.trim() || input_password2.value.trim().length < 8){
//         warning_password2.classList.add('muncul2');
//         input_password2.classList.add('warning');
//     }else{
//         warning_password2.classList.remove('muncul2');
//         input_password2.classList.remove('warning');
//     }
//     });

    
    


// show.forEach(function(el){
//     el.addEventListener('click',function(){
//     if(input_password.type === "password"){
//         input_password.type = "text";
//         input_password2.type = "text";
//         el.src = "unshow.png";
//     }else{
//         input_password.type = "password";
//         input_password2.type = "password";
//         el.src = "show.png";
//     }
//     })
// });


// create_link.addEventListener('click',function(){
//     sign_in_form.classList.add('hilang');
//     sign_up_form.classList.add('muncul');
// });

// already_have.addEventListener('click',function(){
//     sign_in_form.classList.remove('hilang');
//     sign_up_form.classList.remove('muncul');
// });






