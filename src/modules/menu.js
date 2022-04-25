const menu = () => {
  const menu = document.querySelector('menu');
  const body = document.querySelector('body');

  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  };

  body.addEventListener('click', (e) => {
    if (e.target.classList.contains('close-btn') ||
        !e.target.closest('.active-menu') ||
        e.target.matches('.active-menu a')) {
      handleMenu();
    }
  });
};
export default menu;