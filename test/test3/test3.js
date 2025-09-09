

const isi_faqs = document.querySelectorAll('.isi-faq');
const arrow_faqs = document.querySelectorAll('.open-faq');




arrow_faqs.forEach(function(arrow,index){
    arrow.addEventListener('click',function(){
    if(arrow_faqs[index].classList.contains('rotate')){
        arrow_faqs[index].classList.remove('rotate');
        isi_faqs[index].classList.remove('resize');
    }else{
        arrow_faqs[index].classList.add('rotate');
        isi_faqs[index].classList.add('resize');
    }
});
})