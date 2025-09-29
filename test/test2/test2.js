

const carousel_window = document.querySelector('.carousel-window');
const carousel_element = document.querySelectorAll('.card');
const carousel_movable = document.querySelector('.carousel');
const lebar_elemen = carousel_element[0].offsetWidth;
const gap_antar_elemen = parseInt(getComputedStyle(carousel_movable).gap);
const size_geser = lebar_elemen + gap_antar_elemen;
let index = 0;
function slide(){
  if(index >= carousel_element.length){
    index = 0;
    carousel_movable.style.transition = 'none'; 
    carousel_movable.style.transform = `translateX(${index}px)`;
    setTimeout(function(){
      carousel_movable.style.transition = 'transform 0.5s ease';
    },200);
  };
  const nilai_geser = -index * size_geser;
  carousel_movable.style.transform = `translateX(${nilai_geser}px)`;
  index++;
}

setInterval(slide,2000);















// let index = 0;
// const carousel = document.querySelector('.carousel');
// const cards = document.querySelectorAll('.card');
// const windowEl = document.querySelector('.carousel-window');



// // ambil ukuran card
// const cardWidth = cards[0].offsetWidth;

// // ambil gap dari parent (.carousel)
// const carouselStyle = getComputedStyle(carousel);
// const gap = parseInt(carouselStyle.gap);

// // total lebar satu slide = card + gap
// const slideSize = cardWidth + gap;

// function showSlide() {
//   if (index >= cards.length) index = 0;

//   const offset = -index * slideSize;
//   carousel.style.transform = `translateX(${offset}px)`;

//   index++;
// }

// setInterval(showSlide, 2000);