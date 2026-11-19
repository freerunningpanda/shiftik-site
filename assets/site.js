// Тень под шапкой, когда страница прокручена.
const header = document.querySelector('.top');
const mark = () => header.classList.toggle('scrolled', window.scrollY > 4);
addEventListener('scroll', mark, { passive: true });
mark();
