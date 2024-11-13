const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  counter.innerText = 0;
  let cont = 0;
  const target = counter.getAttribute('data-target')
  //console.log(target);
  function incrementCounter() {
    if (cont < target) {
      cont++;
      counter.innerText = cont;
      setInterval(incrementCounter,1);
    }
    else {
      counter.innerText = target;
    }
  }
  incrementCounter();
})