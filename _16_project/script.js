const smallCup = document.querySelectorAll('.cup-small');
const remained = document.getElementById('remained');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');

smallCup.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlightCup(idx));
});

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
}
