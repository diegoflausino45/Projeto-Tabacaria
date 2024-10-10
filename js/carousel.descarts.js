let currentIndex4 = 0;

function nextSlide4() {
  const carousel = document.querySelector('.carousel4');
  const items = document.querySelectorAll('.carousel-item4');
  const itemWidth = items[0].offsetWidth;

  if (currentIndex4 < 4) {
    currentIndex4++;
  }else{
    currentIndex4 = 0
  }

  carousel.style.transform = `translateX(-${itemWidth * currentIndex4}px)`;
}

function prevSlide4() {
  const carousel = document.querySelector('.carousel4');
  const items = document.querySelectorAll('.carousel-item4');
  const itemWidth = items[0].offsetWidth;

  if (currentIndex4 > 0) {
    currentIndex4--;
  }else{
    currentIndex4 = 0
  }

  carousel.style.transform = `translateX(-${itemWidth * currentIndex4}px)`;
}