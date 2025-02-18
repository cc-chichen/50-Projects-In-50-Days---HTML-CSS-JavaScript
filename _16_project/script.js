const smallCup = document.querySelectorAll('.cup-small');
const remained = document.getElementById('remained');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');

smallCup.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlightCup(idx));
});

updateBigCup();

function highlightCup(idx) {
  if (
    smallCup[idx].classList.contains('full') &&
    !smallCup[idx].nextElementSibling.classList.contains('full')
  ) {
    idx--;
  }

  smallCup.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });

  updateBigCup();
}

function updateBigCup() {
  const totalCup = smallCup.length;
  const fullCups = document.querySelectorAll('.cup-small.full').length;

  if (fullCups === totalCup) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
    liters.innerText = `${(1 - fullCups / totalCup) * 2}L`;
  }

  if (fullCups === 0) {
    console.log('in');
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${(fullCups / totalCup) * 330}px`;
    percentage.innerText = `${(fullCups / totalCup) * 100}%`;
  }
}
