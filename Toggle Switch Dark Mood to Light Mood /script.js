const checkbox = document.getElementById('checkbox');

const dark = '#222B3A';

checkbox.addEventListener('change', function() {
  if (this.checked) {
    document.body.style.backgroundColor = dark; // Change to desired color
  } else {
    document.body.style.backgroundColor = ''; // Revert to default color
  }
});

