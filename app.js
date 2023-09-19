'use strict'

const navMenuOuliteEl = document.querySelector('.icon-mobile-nav[name="menu-outline"]');
const navCloseOuliteEl = document.querySelector('.icon-mobile-nav[name="close-outline"]');
const mainNavEl = document.querySelector('.main-nav');

navMenuOuliteEl.addEventListener('click',()=>{
mainNavEl.style.transform = 'translateX(0%)';
mainNavEl.style.opacity = '1';
mainNavEl.style.visibility = 'visible';
navMenuOuliteEl.style.display = 'none'
navCloseOuliteEl.style.display = 'inherit'
})

navCloseOuliteEl.addEventListener('click',()=>{
  mainNavEl.style.transform = 'translateX(100%)';
mainNavEl.style.opacity = '0';
mainNavEl.style.visibility = 'hidden';
navMenuOuliteEl.style.display = 'inherit'
navCloseOuliteEl.style.display = 'none'
})