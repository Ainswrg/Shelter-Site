/* eslint-disable @typescript-eslint/no-use-before-define */
const body = document.querySelector('body');
const headerMain = document.querySelector('.header-main');
const headerPets = document.querySelector('.header-pets');
const menuIcon = document.querySelector('.menu');
const main = document.querySelector('.main');
const mediaQueryForBurger = window.matchMedia('(max-width: 767px)');

mediaQueryForBurger.addEventListener('change', () => closeBurger());

export const menu = menuIcon.addEventListener('click', (e) => {
  e.stopPropagation();
  menuIcon.classList.toggle('_active');
  body.classList.toggle('_active');
  main.classList.toggle('_active');
  if (headerMain) {
    headerMain.classList.toggle('_active');
  }
  if (headerPets) {
    headerPets.classList.toggle('_active');
  }
});

export const onOverlayClick = addEventListener('click', (e) => {
  e.stopPropagation();
  if (
    e.target.className !== 'list' &&
    e.target.className !== 'header-container' &&
    e.target.className !== 'navigation-menu__navbar' &&
    e.target.className !== 'navigation-menu__container' &&
    e.target.className !== 'item'
  ) {
    closeBurger();
  }
});

function closeBurger() {
  menuIcon.classList.remove('_active');
  body.classList.remove('_active');
  main.classList.remove('_active');
  if (headerMain) {
    headerMain.classList.remove('_active');
  }
  if (headerPets) {
    headerPets.classList.remove('_active');
  }
}
