const loveMe = document.querySelector('.loveMe');
const times = document.getElementById('times');

let clickTime = 0;
let LoveTimes = 0;

loveMe.addEventListener('click', (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      LoveTimes++;
      times.innerText = LoveTimes;

      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

function createHeart(e) {
  const x = e.clientX;
  const y = e.clientY;

  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;

  const insideX = x - leftOffset;
  const insideY = y - topOffset;

  const heart = document.createElement('i');
  heart.classList.add('fas');
  heart.classList.add('fa-heart');

  heart.style.top = `${insideY}px`;
  heart.style.left = `${insideX}px`;

  loveMe.appendChild(heart);
  setTimeout(() => loveMe.removeChild(heart), 1000);
}
