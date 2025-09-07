const hamburger = document.querySelector('.hamburger');
const menu_bar = document.querySelector('.menu-bar');
hamburger.addEventListener('click',function(){
    if(menu_bar.classList.contains('show')){
        menu_bar.classList.remove('show');
    }else{
        menu_bar.classList.add('show');
    }
});