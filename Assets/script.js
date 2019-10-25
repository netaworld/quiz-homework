var startBtn = document.getElementById("start-button");
var questionHeading = document.getElementById("question");
var answersList = document.getElementById("answers");
var questionNumber = -1;
var choises;
var answers = [];
var count = 0;
var time = document.getElementById("time");
var secondsLeft = question.length * 15;
var timerInterval;

var selectedAnswer;

startBtn.addEventListener("click", function(event) {
  console.log("start button works");
  document.getElementById("start-screen").classList.add("d-none");
  document.getElementById("qa-screen").classList.remove("d-none");
});

function nextQuestion() {

  // only sets timer if it's currently not set
  
  
  //grabs value of selected answer
  answers.push(answersList.selectedOptions[0].value)
  console.log(answers)

  //if last question, grade results
  if (questionNumber >= 9) {
    //grade quiz
    console.log("write some logic to grade this quiz!")
  } else {
    // answers.push(answersList.selectedOptions)

    questionNumber++;
    // console.log(questionNumber)
    questionHeading.textContent = "";
    questionHeading.textContent = Questions[questionNumber].title;
    choises = Questions[questionNumber].choices;

    for (var i = 0; i < choises.length; i++) {
      document.getElementById(i).textContent = choises[i]
    }

   
  }
}
// time 
var secondsLeft = 75;
function setTime() {

  clearInterval(timerInterval);

   timerInterval = setInterval(function() {
     secondsLeft--;
     time.textContent = 'Time: '+ secondsLeft;
     if(secondsLeft === 0) {
       clearInterval(timerInterval);
       fin();
     }
   }, 1000);

   function answerGuess(guess){
     if ( guess === question[count].answer){
       console.log("correct")
     }

     else{
       secondsLeft -= 15
       console.log("wrong")
     }
   }
  }
