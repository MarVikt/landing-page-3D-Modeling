const slider = () => {
  const sliderBlock = document.querySelector('.portfolio-content');
  const sliders = sliderBlock.querySelectorAll('.portfolio-item');
  const dots = sliderBlock.querySelectorAll('.dot');
  const timerPeriod = 2000;
  let currentSlide = 0;
  let interval;

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
      //arrow-left, arrow-right, portfolio-btn prev
    
  });

  startSlider();
};
export default slider;