const modal = () => {
  const buttons = document.querySelectorAll('.popup-btn');
  const popup = document.querySelector('.popup');
  const popupClose = popup.querySelector('.popup-close');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      popup.style.display = "block";
    });
  });

  popupClose.addEventListener('click', () => {
    popup.style.display = "none";
  });
};
export default modal;