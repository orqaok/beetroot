const burgerBtn = document.getElementById('js-burger');
const headerMenu = document.getElementById('js-header-menu');

burgerBtn.addEventListener('click', ()=> {
  burgerBtn.classList.toggle('burger--open');
  headerMenu.classList.toggle('header__menu--open');
});

const links = document.getElementsByClassName('js-link');

for (const link of links) {
  link.addEventListener('click', () => {
    burgerBtn.classList.remove('burger--open');
    headerMenu.classList.remove('header__menu--open');
  });
}