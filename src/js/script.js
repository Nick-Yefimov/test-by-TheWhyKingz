const sliderImages = document.querySelectorAll('.slider__img'),
      sliderDots = document.querySelectorAll('.slider__dot'),
      sliderLine = document.querySelector('.slider__line');

    let sliderCount = 0,
        sliderWidth;

    window.addEventListener('resize', showSlide);


    setInterval(() => {

        rollSlider();
        thisSlide(sliderCount);
    }, 2000);


    function showSlide() {
        sliderWidth = document.querySelector('.slider').offsetWidth;
        sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
        sliderImages.forEach(slide => slide.style.width = sliderWidth + 'px');
        rollSlider();
    }
    showSlide();


    function rollSlider() {
        sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
    }


    function thisSlide(index) {
        sliderDots.forEach(item => item.classList.remove('active'));
        sliderDots[index].classList.add('active');
    }

    sliderDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            sliderCount = index;
            rollSlider();
            thisSlide(sliderCount);
        })
    })