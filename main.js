const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    navLinks.style.transition = "2s";
    navLinks.style.right = "0";
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    navLinks.style.transition = "2s";
    navLinks.style.right = "-200px";
  }
});
