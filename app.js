'use strict';

const navMenuOuliteEl = document.querySelector(
  '.icon-mobile-nav[name="menu-outline"]'
);
const navCloseOuliteEl = document.querySelector(
  '.icon-mobile-nav[name="close-outline"]'
);
const mainNavEl = document.querySelector('.main-nav');
const headerEl = document.querySelector('.header');

navMenuOuliteEl.addEventListener('click', () => {
  // mainNavEl.style.transform = 'translateX(0%)';
  // mainNavEl.style.opacity = '1';
  // mainNavEl.style.visibility = 'visible';
  // navMenuOuliteEl.style.display = 'none';
  // navCloseOuliteEl.style.display = 'block';
  headerEl.classList.add('nav-open');
});

navCloseOuliteEl.addEventListener('click', () => {
  headerEl.classList.remove('nav-open');
});


const navLinks = document.querySelectorAll('.main-nav-link')

navLinks.forEach(nav =>{
  nav.addEventListener('click',function(event){
    if(headerEl.classList.contains('nav-open')){
      headerEl.classList.remove('nav-open');
    }
    event.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY;
      const scrollOptions = {
          top: offsetTop,
          behavior: 'smooth' // Add smooth scrolling behavior
      };

      window.scrollTo(scrollOptions);
  }
  })
})