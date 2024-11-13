let form1 = document.getElementById('form1');
let form2 = document.getElementById('form2');
let form3 = document.getElementById('form3');

let next1 = document.getElementById('Next1');
let next2 = document.getElementById('Next2');
let back1 = document.getElementById('Back1');
let back2 = document.getElementById('Back2');

let progress = document.getElementById('progress');

let stepCol = document.querySelectorAll('.step-col');

next1.addEventListener('click', () => {
  form1.style.left = '-450px';
  form2.style.left = '40px';
  progress.style.width = '240px';
  stepCol[1].classList.add('active');
});

next2.addEventListener('click', () => {
  form2.style.left = '-450px';
  form3.style.left = '40px';
  progress.style.width = '360px';
  stepCol[2].classList.add('active');
});

back1.addEventListener('click', () => {
  form2.style.left = '450px';
  form1.style.left = '40px';
  progress.style.width = '120px';
  stepCol[0].classList.add('active');
  stepCol[1].classList.remove('active')
});

back2.addEventListener('click', () => {
  form3.style.left = '450px';
  form2.style.left = '40px';
  progress.style.width = '240px';
  stepCol[1].classList.add('active');
  stepCol[2].classList.remove('active')
});

