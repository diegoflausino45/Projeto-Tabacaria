
let currentIndex = 0;

function nextSlide() {
  const carousel = document.querySelector('.carousel1');
  const items = document.querySelectorAll('.carousel-item1');
  const itemWidth = items[0].offsetWidth;

  if (currentIndex < 4) {
    currentIndex++;
  }else{
    currentIndex = 0
  }

  carousel.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
}

function prevSlide() {
  const carousel = document.querySelector('.carousel1');
  const items = document.querySelectorAll('.carousel-item1');
  const itemWidth = items[0].offsetWidth;

  if (currentIndex > 0) {
    currentIndex--;
  }else{
    currentIndex = 0
  }

  carousel.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
}
