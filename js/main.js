const menu = document.querySelector('.menu');
const menuOpener = document.querySelector('.menu-opener');
const menuLinks = document.querySelectorAll('.menu-link');

menuOpener.addEventListener('click', e => {
  e.preventDefault();
  menu.classList.toggle('active');
});

menuLinks.forEach(link => {
  link.addEventListener("click", e => {
    menu.classList.remove("active");
  });
});
