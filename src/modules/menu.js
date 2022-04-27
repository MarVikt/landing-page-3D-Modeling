const menu = () => {
  const menu = document.querySelector('menu');
  const body = document.querySelector('body');

  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  };

  body.addEventListener('click', (e) => {
    if (e.target.closest('.menu') || e.target.classList.contains('close-btn') ||
        e.target.matches('.active-menu a')) {
      handleMenu();
    } else if (!e.target.closest('menu') && menu.classList.contains('active-menu')) {
      handleMenu();
    }
  });
};

export default menu;