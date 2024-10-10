const carouselInner = document.querySelector('.carousel-inner');
const indicators = document.querySelectorAll('.carousel-indicators button');
let currentSlide = 0;

document.querySelector('.carousel-control-prev').addEventListener('click', () => {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : indicators.length - 1;
    updateCarousel();
});

document.querySelector('.carousel-control-next').addEventListener('click', () => {
    currentSlide = (currentSlide < indicators.length - 1) ? currentSlide + 1 : 0;
    updateCarousel();
});

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentSlide = index;
        updateCarousel();
    });
});

function updateCarousel() {
    carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
    indicators.forEach(indicator => indicator.classList.remove('active'));
    indicators[currentSlide].classList.add('active');
}

function autoSlide() {
    currentSlide = (currentSlide < indicators.length - 1) ? currentSlide + 1 : 0;
    updateCarousel();
}

// Configura o intervalo para mudar automaticamente os slides a cada 3 segundos
setInterval(autoSlide, 5000);