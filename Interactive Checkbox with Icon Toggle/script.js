function toggleCheckbox() {
  var checkbox = document.getElementById("checked");
  var icon = document.querySelector("span i");

  if (checkbox.checked) {
    icon.style.opacity = '0.5';
    setTimeout(() => {
      icon.style.opacity = '1';
    }, 200)
    icon.classList.remove("bx-check");
    icon.classList.add("bx-x");
  } else {
    icon.style.opacity = '0.5';
    setTimeout(() => {
      icon.style.opacity = '1';
    }, 200)
    icon.classList.remove("bx-x");
    icon.classList.add("bx-check");
  }
}