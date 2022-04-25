const tabs = () => {
  const tabsPanel = document.querySelector('.service-header');
  const tabs = document.querySelectorAll('.service-header-tab');
  const serviceTab = document.querySelectorAll('.service-tab');

  tabsPanel.addEventListener('click', (e) => {
    if (e.target.closest('.service-header-tab')) {
      const tabBtn = e.target.closest('.service-header-tab');
      tabs.forEach((tab,index) => {
        if (tab === tabBtn) {
          tab.classList.add('active');
          serviceTab[index].classList.remove('d-none');
        } else {
          tab.classList.remove('active');
          serviceTab[index].classList.add('d-none');
        }
      });
    }
  });
};

export default tabs;