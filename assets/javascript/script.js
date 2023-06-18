var quizQuestion = document.getElementById("question");
var timer = document.getElementById("timer");
var btnStart = document.getElementById("btnStart");
var timecounter = document.getElementById("timecounter");
var questionAnswers = document.getElementById("choices");
var alert = document.getElementById("alert");
var scoreEl = document.getElementById("score");
var gameOver = document.getElementById("game-over");
var subTitle = document.getElementById("subtitle");

var nextQuestions 
var score = 0;
var time = 75;
var currentindex = 0;
var allScores = [];
var storedScores = JSON.parse(localStorage.getItem("userData"));


var questions = [
    {
        question: "Commonly used data type Do Not include:",
        choices: ["strings","booleance","alerts", "numbers"],
        answer : "alerts"    
    },
    {
        question: "The condition in an if/else statement is enclosed within:",
        choices: ["quotes","Curly brackets","parentheses", "square brackets"],
        answer : "parentheses"    
    },
    {
        question: "Arrays in JavaScript can be used to store:",
        choices: ["numbers and strings","others Arrays","booleances", "all of the above"],
        answer : "all of the above"    
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables ",
        choices: ["commas","curly brackets","quotes","parentheses"],
        answer : "quotes"    
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript","terminal/bash","alerts", "console.log"],
        answer : "console.log"    
    },
]

btnStart.addEventListener("click", startGame);

function startGame(){

    subTitle.style.display = "none";
    
    if(storedScores !==null) {
        allScores = storedScores;
    }
    
    btnStart.disabled = true;
    nextQuestions= questions[currentindex]
      
    displayQuestion(nextQuestions)

    updateTimer();
}

function updateTimer() {
    var timeInterval = setInterval(function(){
        timer.innerText = "Timer: " + time;
        time--;
       }, 1000);

       if (time <= 0) {
        endGame();
      }
    
}

function displayQuestion(question){

    quizQuestion.innerText=question.question

    question.choices.forEach(element => {
     var button = document.createElement("button")
    
    button.innerText=element
    questionAnswers.appendChild(button)
    button.addEventListener("click", displaynextQuestion)
    });
}


function displaynextQuestion(e){

    currentindex++

    if(currentindex < questions.length){
        checkAnswer(e.target.innerText == nextQuestions.answer)
        questionAnswers.innerHTML=""
        if(currentindex < questions.length){    
            nextQuestions= questions[currentindex]
            displayQuestion(nextQuestions)  
        }else {
            currentindex = 0
            displayQuestion(nextQuestions)  
        }

    }else{
        endgame()
        

    }
    
     
}

function checkAnswer(response){
    
    if(response){
        alert.innerText= "Correct"
    }else {
        alert.innerText="Wrong"
        time = time -15
        timer.innerText = "Timer: " + time;
        console.log("Incorrect")

    }
    setTimeout(function(){
        alert.innerText=""
    
        }, 1000);

}

function endgame (){
    scoreEl.textContent = time;

    gameOver.style.display = "block";

    quizQuestion.style.display = "none";
    questionAnswers.style.display = "none";


 }