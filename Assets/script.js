var startBtn = document.getElementById("start-button");
var questionHeading = document.getElementById("question");
var answersList = document.getElementById("answers");
var questionNumber = -1;
var choises;
var answers = [];

var selectedAnswer;

startBtn.addEventListener("click", function(event) {
  console.log("start button works");
  document.getElementById("start-screen").classList.add("d-none");
  document.getElementById("qa-screen").classList.remove("d-none");
});

function nextQuestion() {
  //if last question, grade results
  if (questionNumber >= 9) {
    //grade quiz
    console.log("write some logic to grade this quiz!")
  } else {
      //START HERE
      answers.push(answerList.selectedOptions)
    console.log(answers)
    // answersList.addEventListener("change", function(e) {
    //     console.log(this.textContent);
    // });

    questionNumber++;
    console.log(questionNumber)
    questionHeading.textContent = "";
    questionHeading.textContent = Questions[questionNumber].title;
    choises = Questions[questionNumber].choices;

    for (var i = 0; i < choises.length; i++) {
    //   var newChoice = document.createElement("option");
    //   newChoice.setAttribute("value", choises[i])
    //   newChoice.textContent = choises[i];
    //   answersList.appendChild(newChoice);
        document.getElementById(i).textContent = choises[i]
    }

  }
}

// this is loop//
// questionHeading.textContent = Questions[0].title;

// answersList.innerHTML ="";
// var choises=Questions[0].choices;
// for (var i=0; i < choises.length; i++){
//     var newChoice = document.createElement("div");
//     newChoice.textContent = choises[i];
//     answersList.appendChild(newChoice);
// }
// var choises=Questions[1].choices;
// for (var i=0; i < choises.length; i++){
//     var newChoice = document.createElement("div");
//     newChoice.textContent = choises[i];
//     answersList.appendChild(newChoice);
// }
// var choises=Questions[2].choices;
// for (var i=0; i < choises.length; i++){
//     var newChoice = document.createElement("div");
//     newChoice.textContent = choises[i];
//     answersList.appendChild(newChoice);
// }
// var choises=Questions[3].choices;
// for (var i=0; i < choises.length; i++){
//     var newChoice = document.createElement("div");
//     newChoice.textContent = choises[i];
//     answersList.appendChild(newChoice);
// }
// var choises=Questions[4].choices;
// for (var i=0; i < choises.length; i++){
//     var newChoice = document.createElement("div");
//     newChoice.textContent = choises[i];
//     answersList.appendChild(newChoice);
// }
// var choises=Questions[5].choices;
// for (var i=0; i < choises.length; i++){
//     var newChoice = document.createElement("div");
//     newChoice.textContent = choises[i];
//     answersList.appendChild(newChoice);
// }

// var choises=Questions[6].choices;
// for (var i=0; i < choises.length; i++){
//     var newChoice = document.createElement("div");
//     newChoice.textContent = choises[i];
//     answersList.appendChild(newChoice);
// }
// var choises=Questions[7].choices;
// for (var i=0; i < choises.length; i++){
//     var newChoice = document.createElement("div");
//     newChoice.textContent = choises[i];
//     answersList.appendChild(newChoice);
// }
// var choises=Questions[8].choices;
// for (var i=0; i < choises.length; i++){
//     var newChoice = document.createElement("div");
//     newChoice.textContent = choises[i];
//     answersList.appendChild(newChoice);
// }
// var choises=Questions[9].choices;
// for (var i=0; i < choises.length; i++){
//     var newChoice = document.createElement("div");
//     newChoice.textContent = choises[i];
//     answersList.appendChild(newChoice);
// }

// // timer//
// var timeleft = 75;
// var timer = document.getElementById("timer");
// timer.textContent = timeleft;

// function timeIt() {
//   timeleft--;
//   timer.textContent = timeleft;
// }
// console.log("here");

// //timeIt();

// setInterval(timeIt, 1000);
// // needs to be updated//
// if (x === true) {
//   timer.textContent = timeleft;
// } else {
//   timeleft - 15;
// }

// // when time goes to 0 and alert should say  "time is over"//
// if (timeleft <= 0) {
//   //need to show results//
// } else {
// }

// // next test should start from 75 seconds again//
// function restart() {
//   timeleft = 75;
// }

// //for right or wrong answers Alerts should show //

// if (answer === true) {
//   alert = "Correct";
// } else {
//   alert = "Sorry, wrong!";
// }

// //need box to keep scores-local storage//

// var highScoreEl = document.querySelector("#highScore");

// //var count = localStorage.getItem("count");

// addButton.addEventListener("click", function() {
//   count++;
//   counter.textContent = count;

//   localStorage.setItem("count", count);
// });

// // to start test//
// incrementEl.addEventListener("click", function() {
//   count++;
//   setCounterText();
// });

// // store test results//
