let currentIndex3 = 0;

function nextSlide3() {
  const carousel = document.querySelector('.carousel3');
  const items = document.querySelectorAll('.carousel-item3');
  const itemWidth = items[0].offsetWidth;

  if (currentIndex3 < 4) {
    currentIndex3++;
  }else{
    currentIndex3 = 0
  }

  carousel.style.transform = `translateX(-${itemWidth * currentIndex3}px)`;
}

function prevSlide3() {
  const carousel = document.querySelector('.carousel3');
  const items = document.querySelectorAll('.carousel-item3');
  const itemWidth = items[0].offsetWidth;

  if (currentIndex3 > 0) {
    currentIndex3--;
  }else{
    currentIndex3 = 0
  }

  carousel.style.transform = `translateX(-${itemWidth * currentIndex3}px)`;
}