const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeBgNum = 0;

setBgImg();

rightBtn.addEventListener('click', () => {
  activeBgNum++;
  if (activeBgNum > slides.length - 1) {
    activeBgNum = 0;
  }

  setBgImg();
  setActiveImg();
});

leftBtn.addEventListener('click', () => {
  activeBgNum--;
  if (activeBgNum < 0) {
    activeBgNum = slides.length - 1;
  }

  setBgImg();
  setActiveImg();
});

function setBgImg() {
  body.style.backgroundImage = slides[activeBgNum].style.backgroundImage;
}

function setActiveImg() {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  slides[activeBgNum].classList.add('active');
}
