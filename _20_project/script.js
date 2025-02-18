const buttons = document.querySelectorAll('.ripple');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    const buttonX = e.target.offsetLeft;
    const buttonY = e.target.offsetTop;

    const insideX = x - buttonX;
    const insideY = y - buttonY;

    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.left = insideX + 'px';
    circle.style.top = insideY + 'px';

    button.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
  });
});
