document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const closeMenu = document.getElementById('closeMenu');
  const mobileMenu = document.getElementById('mobileMenu');
  const navbar = document.querySelector('.navbar');
  const topBanner = document.querySelector('.top-banner');

  // Toggle mobile menu
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('show');
  });

  closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('show');
  });

  // Scroll-based fixed navbar
  window.addEventListener('scroll', () => {
    const bannerHeight = topBanner.offsetHeight;
    if (window.scrollY >= bannerHeight) {
      navbar.classList.add('fixed-nav');
      document.body.style.paddingTop = `${navbar.offsetHeight}px`;
    } else {
      navbar.classList.remove('fixed-nav');
      document.body.style.paddingTop = '0';
    }
  });
});
