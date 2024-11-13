let text = document.querySelector('textarea');

text.addEventListener('keyup', e => {
  text.style.height = 'auto'; // Reset height to auto to calculate correct scrollHeight
  let height = e.target.scrollHeight + 'px';
  text.style.height = height;
});

