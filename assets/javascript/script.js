var quizQuestions = document.getElementById("quiz-questions");
var timer = document.getElementById("timer");
var btnStart = document.getElementById("btnStart");
var timecounter = document.getElementById("timecounter");

var nextQuestions 
var score = 0;
var time = 75;
var currentindex = 0;
var allScores = [];
var storedScores = JSON.parse(localStorage.getItem("userData"));


var questions = [
    {
        question: "Commonly used data type Do Not include:---",
        choices: ["strings","booleance","alerts", "numbers"],
        answer : 2   
    },
    {
        question: "The condition in an if/else statement is enclosed within:---",
        choices: ["quotes","Curly brackets","parentheses", "square brackets"],
        answer : 2    
    },
    {
        question: "Arrays in JavaScript can be used to store:---",
        choices: ["numbers and strings","others Arrays","booleances", "all of the above"],
        answer : 3   
    },
    {
        question: "String values must be enclosed within --- when being assigned to variables ",
        choices: ["commas","curly brackets","quotes","parentheses"],
        answer : 2  
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:---",
        choices: ["JavaScript","terminal/bash","alerts", "console.log"],
        answer : 3   
    },
]

btnStart.addEventListener("click", startGame);

function startGame(){
    if(storedScores !==null) {
        allScores = storedScores;
    }
     btnStart.disabled = true;
    nextQuestions= questions[currentindex]
      


    updateTimer();
}

function updateTimer() {
    var timeInterval = setInterval(function(){
        timer.innerText = "Timer: " + time;
        time--;
       }, 1000);
    
}

