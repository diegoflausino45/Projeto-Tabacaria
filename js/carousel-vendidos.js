let currentIndex2 = 0;

function nextSlide2() {
  const carousel = document.querySelector('.carousel2');
  const items = document.querySelectorAll('.carousel-item2');
  const itemWidth = items[0].offsetWidth;

  if (currentIndex2 < 4) {
    currentIndex2++;
  }else{
    currentIndex2 = 0
  }

  carousel.style.transform = `translateX(-${itemWidth * currentIndex2}px)`;
}

function prevSlide2() {
  const carousel = document.querySelector('.carousel2');
  const items = document.querySelectorAll('.carousel-item2');
  const itemWidth = items[0].offsetWidth;

  if (currentIndex2 > 0) {
    currentIndex2--;
  }else{
    currentIndex2 = 0
  }

  carousel.style.transform = `translateX(-${itemWidth * currentIndex2}px)`;
}