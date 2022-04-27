const modal = () => {
  const buttons = document.querySelectorAll(".popup-btn");
  const popup = document.querySelector(".popup");
  const content = popup.querySelector(".popup-content");

  function showModal() {
    popup.style.display = "block";
    if (window.screen.availWidth > 767) {
      let count = 0;
      content.style.opacity = "0";
      let idInterval = setInterval(() => {
        count ++; 
        content.style.opacity = String(count / 10);
        if (count == 10) clearInterval(idInterval);
      },30);
    }
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click",showModal);
  });

  popup.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-content') || e.target.matches('.popup-close')) {
      popup.style.display = "none";
    }
  });
};

export default modal;