let index = 0;
const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card');
const windowEl = document.querySelector('.carousel-window');
index = 0;   
function showSlide() {
  // clamp index so it stays between 0 and cards.length - 1
  if(index >= cards.length) index = 0;

  const offset = -index * windowEl.clientWidth;
  carousel.style.transform = `translateX(${offset}px)`;
  index++;
}
// Example: auto slide every 3s
setInterval(() => {
  showSlide()
}, 3000);
