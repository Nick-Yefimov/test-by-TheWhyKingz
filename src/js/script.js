const sliderImages = document.querySelectorAll('.slider__img'),
      sliderDots = document.querySelectorAll('.slider__dot'),
      sliderLine = document.querySelector('.slider__line');


    let currentSlide = 0;

    const intervalTime = 5000;

    let sliderCount = 0,
        sliderWidth;
    
    window.addEventListener('resize', initSlider);

    function setIntervalToSlider() {
        setInterval(() => {
            if (sliderImages[currentSlide + 1]) {
                currentSlide = currentSlide + 1
                addActiveClassToDotsByIndex(currentSlide)
                sliderCount = currentSlide
                setTransformStyleToSlide();
            } else {
                currentSlide = currentSlide - 1
                addActiveClassToDotsByIndex(currentSlide)
                sliderCount = currentSlide
                setTransformStyleToSlide();
            }
        }, intervalTime);
    }

    function initSlider() {
        sliderWidth = document.querySelector('.slider').offsetWidth;
        sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
        sliderImages.forEach(slide => slide.style.width = sliderWidth + 'px');
        setTransformStyleToSlide();
        setIntervalToSlider();
    }


    function setTransformStyleToSlide() {
        sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
    }


    function addActiveClassToDotsByIndex(index) {
        sliderDots.forEach(item => item.classList.remove('active'));
        sliderDots[index].classList.add('active');
    }

    function handleDotsClick() {   
        sliderDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                sliderCount = index;
                setTransformStyleToSlide();
                addActiveClassToDotsByIndex(index);
            })
        })
    }


    initSlider();
    handleDotsClick();
    