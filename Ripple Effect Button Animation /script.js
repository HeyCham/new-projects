let button = document.getElementById('btn');

button.addEventListener("click", (e) => {
  e.preventDefault();

  let overlay = document.createElement('span'); 
  overlay.classList.add("overlay");
  setTimeout(() =>{
    overlay.classList.remove('overlay');
  },600);
  e.target.appendChild(overlay);

  let xValue = e.clientX - e.target.offsetLeft; 
  let yValue = e.clientY - e.target.offsetTop;

  overlay.style.left = xValue + "px";
  overlay.style.top = yValue + "px";
});