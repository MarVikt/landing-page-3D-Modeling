import{animate} from './helpers';

const modal = () => {
  const buttons = document.querySelectorAll(".popup-btn");
  const popup = document.querySelector(".popup");
  const content = popup.querySelector(".popup-content");

  function showModal() {
    popup.style.display = "block";
    document.body.style.overflow = "hidden";
    if (window.screen.availWidth > 767) {
      animate({
        duration: 500,
        timing(timeFraction) {
          return Math.pow(timeFraction, 2);
        },
        draw(progress) {
          content.style.opacity = progress;
        }
      });
    }
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click",showModal);
  });

  popup.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-content') || e.target.matches('.popup-close')) {
      popup.style.display = "none";
      document.body.style.overflow = "auto";
      let statusBlock = document.getElementById('status-form3');
      if (statusBlock) {
        statusBlock.remove();
      }
    }
  });
};

export default modal;