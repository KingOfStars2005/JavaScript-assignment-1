const studentName = prompt("Enter your name: "); // Getting Student's age

// Checking if the value is a number or something else and storing only if it's a number
let studentAge = numCheck(prompt("Enter your age: "));
let marks = numCheck(prompt("Enter your marks: "));

//function to check it the input is a number
function numCheck(c) {
  while (true) {
    c = Number(c);
    if (isNaN(c)) {
      c = prompt("Please enter a Number for this! ");
    } else {
      return c;
    }
  }
}

//Grade system
let grade = "";
if (marks >= 90) {
  grade = "A";
} else if (marks < 90 && marks >= 80) {
  grade = "B";
} else if (marks < 80 && marks >= 65) {
  grade = "C";
} else if (marks < 65 && marks >= 40) {
  grade = "D";
} else {
  grade = "Fail";
}



let data = (`Name: ${studentName}<br>Age: ${studentAge}<br>Grade: ${grade}`);
document.getElementById("output").innerHTML = data

