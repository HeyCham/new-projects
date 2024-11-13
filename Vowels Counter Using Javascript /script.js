// Input Time exicute

/*
const showOutput = document.querySelector('.show-output');
const btn = document.getElementById('btn');
let vowelNum = document.getElementById('vowel-num');
const textarea = document.getElementById('textarea');

const vowels = ['a', 'e', 'i', 'o', 'u'];

textarea.addEventListener('input', () => { // Listen for the input event
  let dataValue = textarea.value.trim().toLowerCase(); // Get the trimmed and lowercase value of the textarea
  let count = 0;
  for (let char of dataValue) {
    if (vowels.includes(char)) { // Check if the character is a vowel
      count++;
    }
  }
  vowelNum.textContent = count; // Display the count of vowels

  // Show or hide the display based on dataValue
  if (dataValue === '' || /^\s+$/.test(dataValue)) { // Check if dataValue is empty or contains only whitespace characters
    showOutput.style.display = 'none'; // Hide the display
  } else {
    showOutput.style.display = 'block'; // Show the display
  }
});
*/


// When click button then show 

const showOutput = document.querySelector('.show-output');
const btn = document.getElementById('btn');
let vowelNum = document.getElementById('vowel-num');
const textarea = document.getElementById('textarea');

const vowels = ['a', 'e', 'i', 'o', 'u'];

btn.addEventListener('click', () => {
  let dataValue = textarea.value.toLowerCase(); // Get the value of the textarea and convert to lowercase
  if (dataValue === '') {
    textarea.classList.add('active');
    showOutput.classList.add('shake')
    setTimeout(() => {
      textarea.classList.remove('active');
      showOutput.classList.remove('shake')
      showOutput.style.display = 'none'
    }, 600);
  }
  let count = 0;
  for (let char of dataValue) {
    if (vowels.includes(char)) { // Check if the character is a vowel
      count++;
    }
  }
  showOutput.style.display = 'block';
  vowelNum.textContent = count; // Display the count of vowels
  
});