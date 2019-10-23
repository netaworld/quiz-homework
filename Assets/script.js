var startBtn = document.getElementById("start-button");

startBtn.addEventListener("click", function(event){

});



var timeleft =75;
var timer = document.getElementById("timer");
timer.textContent = timeleft;

function timeIt(){
timeleft--;
timer.textContent = timeleft;



}
console.log("here")

//timeIt();

setInterval(timeIt, 1000);
// needs to be updated//
if(choise === true){
    timer.textContent = timeleft;

} else {
    timeleft-15;
}

// when time goes to 0 and alert should say  "time is over"//
if(timeleft <= 0){
    //need to show results//

} else{
    
}

// next test should start from 75 seconds again//
function restart(){
    timeleft=75;
}



//for right or wrong answers Alerts should show //

 if(choise === true){
     alert = "Correct"
 } else{
alert = "Sorry, wrong!"

 }

//need box to keep scores-local storage//



var highScoreEl= document.querySelector("#highScore");

//var count = localStorage.getItem("count"); 

addButton.addEventListener("click", function() {
  count++;
  counter.textContent = count;
 
  localStorage.setItem("count", count);
 });

// to start test//
 incrementEl.addEventListener("click", function() {
    count++;
    setCounterText();
  });

