const slider = () => {
  const sliderBlock = document.querySelector('.portfolio-content');
  const sliders = sliderBlock.querySelectorAll('.portfolio-item');
  let dots = sliderBlock.querySelectorAll('.dot');
  const timerPeriod = 1500;
  let currentSlide = 0;
  let interval;

  const createDots = () => {
    const dotsArea = document.querySelector('.portfolio-dots');
    sliders.forEach((elem,index) => {
      const newDot = document.createElement('li');
      newDot.classList.add('dot');
      if (index === 0) {
        newDot.classList.add('dot-active');
      }
      dotsArea.append(newDot);
    });
    dots = sliderBlock.querySelectorAll('.dot');
  };

  const prevSlide = (elems,index,strClass) => {
    elems[index].classList.remove(strClass);
  };

  const nextSlide = (elems,index,strClass) => {
    elems[index].classList.add(strClass);
  };

  const autoSlide = () => {
    prevSlide(sliders,currentSlide,'portfolio-item-active');
    prevSlide(dots,currentSlide,'dot-active');
    currentSlide ++;
    if (currentSlide >= sliders.length) {
      currentSlide = 0;
    }
    nextSlide(sliders,currentSlide,'portfolio-item-active');
    nextSlide(dots,currentSlide,'dot-active');
  };

  const startSlider = () => {
    interval = setInterval(autoSlide,timerPeriod);
  };

  const stopSlider = () => {
    clearInterval(interval);
  };

  sliderBlock.addEventListener('mouseenter', (e) => {
    if (e.target.matches('.portfolio-btn, .dot')) {
      stopSlider();
    }
  },true);

  sliderBlock.addEventListener('mouseleave', (e) => {
    if (e.target.matches('.portfolio-btn, .dot')) {
      startSlider();
    }
  },true);

  sliderBlock.addEventListener('click', (e) => {
    e.preventDefault();
    if (!e.target.matches('.portfolio-btn, .dot')) {
      return;
    }
    prevSlide(sliders,currentSlide,'portfolio-item-active');
    prevSlide(dots,currentSlide,'dot-active');

    if (e.target.matches('#arrow-left')) {
      currentSlide --;
      currentSlide = currentSlide < 0 ? sliders.length - 1 : currentSlide;
    } else if (e.target.matches('#arrow-right')) {
      currentSlide ++;
      currentSlide = currentSlide >= sliders.length ? 0 : currentSlide;
    } else if (e.target.matches('.dot')) {
      dots.forEach((dot,index) => {
        if (dot === e.target) {
          currentSlide = index;
        }
      });
    }

    nextSlide(sliders,currentSlide,'portfolio-item-active');
    nextSlide(dots,currentSlide,'dot-active');
  });

  createDots();
  startSlider();
};
export default slider;