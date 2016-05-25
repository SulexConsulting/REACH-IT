//Define Global Variables
runningScoreSum = 0;
runningAverage = 0;
counter = 0;

function Display()
{
  //receive score entered by user
  var currentScore = document.getElementById("sc").value;

  //increment counter and display on browser
  counter ++;
  document.getElementById("noe").value = counter;

  //increment runningScoreSum and display on browser
  runningScoreSum += parseInt(currentScore);
  document.getElementById("ts").value = runningScoreSum;

  //calculate runningAverage and display on browser
  runningAverage = runningScoreSum/counter;
  document.getElementById("avg").value = runningAverage;

  //calculate letterGrade and display on browser
  if (runningAverage >= 90) letterGrade = "A";
  else if (runningAverage >= 80) letterGrade = "B";
  else if (runningAverage >= 70) letterGrade = "C";
  else if (runningAverage >= 60) letterGrade = "D";
  else letterGrade = "F";

  document.getElementById("sg").value = letterGrade;
}

//trigger that executes code.
var display = document.getElementById("calculate");
display.addEventListener("click", Display);
