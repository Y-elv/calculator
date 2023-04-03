console.log("hello");
// Get input elements and form
const userInputDay = document.getElementById("date");
const userInputMonth = document.getElementById("month");
const userInputYear = document.getElementById("year");
const form = document.getElementById("myform");

// Listen for form submission event
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission behavior
document.getElementById("hidden").style.display="block"

// Get current date
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = 1 + currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Get user input values
  const userDay = parseInt(userInputDay.value);
  const userMonth = parseInt(userInputMonth.value);
  const userYear = parseInt(userInputYear.value);

  // Validate user input
  if (!isValidDate(userDay, userMonth, userYear)) {
    alert("Please enter a valid date"); // Show error message to user
    return;
  }

  // Calculate date difference
  let dayDiff = currentDay - userDay;
  let monthDiff = currentMonth - userMonth;
  let yearDiff = currentYear - userYear;

  if (dayDiff < 0) {
    // Borrow a month from the current date
    monthDiff--;
    dayDiff += daysInMonth(currentMonth - 1, currentYear);
  }

  if (monthDiff < 0) {
    // Borrow a year from the current date
    yearDiff--;
    monthDiff += 12;
  }
  if(userInputYear===currentYear){
    yearDiff=0;
  }

  // Display result to user
  const resulty = yearDiff;
  document.getElementById("ty").innerHTML = resulty;

  const resultm = monthDiff;
  document.getElementById("tm").innerHTML = resultm;

  const resultd = dayDiff;
  document.getElementById("td").innerHTML = resultd ;
  // Clear form input fields
  
  form.reset();
});

// Helper functions

// Check if a given day, month, and year form a valid date
function isValidDate(day, month, year) {
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (year < 0 || month < 1 || month > 12) {
    return false;
  }

  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  const maxDays = isLeapYear && month === 2 ? 29 : daysInMonth[month - 1];

  return day >= 1 && day <= maxDays;
}

// Get the number of days in a given month and year
function daysInMonth(month, year) {
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  const maxDays = isLeapYear && month === 1 ? 29 : daysInMonth[month];
  return maxDays;
}
