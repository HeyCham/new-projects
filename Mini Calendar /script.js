let year = document.querySelector('.year');
let month = document.querySelector('.month'); // corrected class name
let day = document.querySelector('.day');
let date = document.querySelector('.date');

const lang = navigator.language;

const getActualDate = (lang) => {
  const currentDate = new Date();
  
  const currentDay = currentDate.getDate(); // corrected variable name
  const currentDayName = currentDate.toLocaleString(lang, { weekday: "long" }); // corrected variable name
  const currentMonth = currentDate.toLocaleString(lang, { month: "long" });
  const currentYear = currentDate.getFullYear();
  
  // Displaying the current year, month, day, and date in the HTML
  year.innerText = currentYear;
  month.innerText = currentMonth;
  day.innerText = currentDayName;
  date.innerText = currentDay;
}

getActualDate(lang);
