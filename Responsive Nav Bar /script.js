const hamburgerCont = document.querySelector('.hamburger__bars');
const ulList = document.querySelectorAll('ul');
const labels = document.querySelectorAll('label');




hamburgerCont.addEventListener('click', () => {
  ulList.forEach(ul => {
    ul.classList.toggle('active');
  })
})

labels.forEach(label => {
  label.addEventListener('click', () => {
    ulList.forEach(ul => {
      ul.classList.toggle('active');
    })
  })
})