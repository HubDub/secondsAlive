
function ageInSeconds () {
  const secondsPerMinute = 60;
  const minutesPerHour = 60;
  const hoursPerDay = 24;
  const daysPerYear = 365;
  let inputYears = document.getElementById("age");
  let outputAge = document.getElementById("output");
  let inputValue = inputYears.value;
  console.log("the input value is " + inputValue);
  let todaysDate = new Date();
  let todaysYear = todaysDate.getFullYear();
  console.log("this year is" + todaysYear);
  let yourAge = todaysYear - inputValue;
  console.log("your age is " + yourAge);
  let ageCalculationValue = yourAge * secondsPerMinute * minutesPerHour * hoursPerDay * daysPerYear;
  console.log("you've been alive this many seconds: " + ageCalculationValue);
  ageCalculationValue = ageCalculationValue.toLocaleString();
  outputAge.innerHTML = "You have lived " + ageCalculationValue + " seconds!";
}

document.getElementById("submit").addEventListener("click", function (event) {
  // console.log(event);
  console.log(inputValue);
  ageInSeconds();
})

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    ageInSeconds();
  }
})

//to do: function to verify there is data in input and alert message if no data. if there is data, run ageInSeconds.

//todo: make it so they can enter their birthday and calculate seconds from the day of birth instead of year
