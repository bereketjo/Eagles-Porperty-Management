
// ------ navbar toggler ------ //
window.addEventListener('scroll', function() {
  let header = document.querySelector('header');
  let windowPosition = window.scrollY > 0;
  header.classList.toggle('scrolling-active', windowPosition);
});

function change() {
  let header = document.querySelector('header');
  header.classList.toggle('clicking-active');
};
