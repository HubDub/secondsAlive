function verify() {
  let inputYears = document.getElementById("age");
  let inputValue = inputYears.value;
  console.log("the input value is " + inputValue);
  let userBday = new Date(inputValue);
  if (userBday == "Invalid Date") {
    alert("please type a birthday in the input space");
  } else {
    console.log(userBday);
    ageInSeconds(userBday);
  }
}


function ageInSeconds (userBday) {
  let outputAge = document.getElementById("output");
  let todaysDate = new Date();
  console.log(todaysDate);
  let difference = todaysDate - userBday;
  console.log(difference);
  let diffInSecs = Math.round(difference/1000);
  console.log(diffInSecs);
  diffInSecs = diffInSecs.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
  outputAge.innerHTML = "You have lived " + diffInSecs + " seconds!";
}

document.getElementById("submit").addEventListener("click", function (event) {
  verify();
})

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    verify();
  }
})