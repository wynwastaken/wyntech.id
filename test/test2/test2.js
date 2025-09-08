let index = 0;
const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card');
const windowEl = document.querySelector('.carousel-window');



// ambil ukuran card
const cardWidth = cards[0].offsetWidth;

// ambil gap dari parent (.carousel)
const carouselStyle = getComputedStyle(carousel);
const gap = parseInt(carouselStyle.gap);

// total lebar satu slide = card + gap
const slideSize = cardWidth + gap;

function showSlide() {
  if (index >= cards.length) index = 0;

  const offset = -index * slideSize;
  carousel.style.transform = `translateX(${offset}px)`;

  index++;
}

setInterval(showSlide, 3000);