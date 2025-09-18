
const kotakList = document.querySelectorAll('.kotak_tanya');
const kotakList_isi = document.querySelectorAll('.kotak_tanya_isi');
const jawabans = document.querySelectorAll('.jawaban');
const KotakArrowList = document.querySelectorAll('.arrow');

const menu_bar = document.querySelector('.menu-bar');
const hamburger = document.querySelector('.hamburger');


//dapetin smua elemen jawaban yg dii class kotak_tanya

//3===================================D



//3===================================D


//3===================================D

KotakArrowList.forEach((arrow,index)=> {
    arrow.addEventListener('click',function(){
        if(arrow.classList.contains("arrow_flip")){
            arrow.classList.remove("arrow_flip");
            kotakList_isi[index].classList.remove("terbuka");
        }else{
            KotakArrowList.forEach((arrow,index) =>{
            if(arrow.classList.contains("arrow_flip")){
                KotakArrowList[index].classList.remove("arrow_flip");
                kotakList_isi[index].classList.remove("terbuka");
                }
            })
            arrow.classList.add("arrow_flip");
            kotakList_isi[index].classList.add("terbuka");
        }
    })
})


hamburger.addEventListener('click',function(){
    if(menu_bar.classList.contains('show')){
        menu_bar.classList.remove('show');
    }else{
        menu_bar.classList.add('show');
    }
    
});


