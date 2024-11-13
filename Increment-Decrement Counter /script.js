let countOutput = document.querySelector('.count');
const minusBtn = document.querySelector('.minus');
const plusBtn = document.querySelector('.plus');
const resetBtn = document.querySelector('.reset');

let cont = 0;

plusBtn.addEventListener('click', () => {
  cont++;
  countOutput.innerHTML = cont;
});

minusBtn.addEventListener('click', () => {
  cont--;
  countOutput.innerHTML = cont;
});

resetBtn.addEventListener('click', () => {
  cont = 0;
  countOutput.innerHTML = cont;
});
