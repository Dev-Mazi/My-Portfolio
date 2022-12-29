'use strict';

// MAKING THE MOBILE NAV WORK

const menu = document.getElementById('menu-mobile');
const mobileMenu = document.getElementById('menu-btn');

mobileMenu.addEventListener('click', function () {
  mobileMenu.classList.toggle('open');
  menu.classList.toggle('hidden');
});
