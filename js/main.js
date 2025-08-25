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

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((elem) => observer.observe(elem));
