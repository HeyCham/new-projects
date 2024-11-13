const colorPalette = document.querySelectorAll('.color__palette span');

colorPalette.forEach(color => {
  color.addEventListener('click', function(e) {
    // Remove 'active' class from all color elements
    colorPalette.forEach(item => {
      item.classList.remove('active');
    });
    
    // Add 'active' class to the clicked color element
    e.target.classList.add('active');

    // Set the primary color to the clicked color
    const newColor = window.getComputedStyle(e.target).backgroundColor;
    document.documentElement.style.setProperty('--primary-color', newColor);
  });
});
