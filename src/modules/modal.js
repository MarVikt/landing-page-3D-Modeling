const modal = () => {
  const buttons = document.querySelectorAll(".popup-btn");
  const popup = document.querySelector(".popup");
  const popupClose = popup.querySelector(".popup-close");
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

  popupClose.addEventListener("click", () => {
    popup.style.display = "none";
  });
};

export default modal;