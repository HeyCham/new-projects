let form1 = document.getElementById('form1');
let form2 = document.getElementById('form2');

let logBtn = document.getElementById('logbtn');
let signbtn = document.getElementById('signbtn');


signbtn.addEventListener('click', () => {
  form1.style.left = '-450px';
  form2.style.left = '25px';

  logBtn.classList.remove('active');
  signbtn.classList.add('active');
})
logBtn.addEventListener('click', () => {
  form1.style.left = '25px';
  form2.style.left = '450px';
  
  signbtn.classList.remove('active');
  logBtn.classList.add('active');
})


