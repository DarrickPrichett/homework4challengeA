var timerEl = document.getElementById('time-remaining-btn');
var mainEl = document.getElementById('main');
const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons') 
let shuffledQuestions, currentQuestionIndex
// create a function to keep track of the score
let correctAnswers = 0;
let wrongAnswers = 0;
var questions = [
    {
        question: "The external JavaScript file must contain the <script> tag.",
        answer: [{text: "True", correct:  false}, { text: "False", correct: true}],
    },
    {
        question: "Which one of these keywords is NOT a JavaScript data type",
        answer: [{text: "undefined", correct: false}, {text: "boolean", correct: false}, {text: "dictionary", correct: true}, {text: "string", correct: false}], 
    },
    {
        question: "How do you create a function in JavaScript?",
        answer: [{text: "function myFunction()", correct: true}, {text: "function.myFunction", correct: false}, {text: "function(myFunction)", correct: false}, {text: "function.myFunction()", correct: false}],
    },
    {
        question: "How do you call a function named 'myFunction'?",
        answer: [{text: "call myFunction()", correct: false}, {text: "call function myFunction()", correct: false}, {text: "myFunction()", correct: true}]
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        answer: [{text: "The <head> section", correct: false}, {text: "Both the <head> and the <body> section are correct", correct: true}, {text: "The <body> section", correct: false}, {text: "Anywhere in the JavaScript", correct: false}],
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        answer: [{text:"<script href='xxx.js'>", correct: false}, {text: "<script ref='xxx.js'>", correct: false}, {text: "<script name='xxx.js'>", correct: false}, {text:"<script src='xxx.js'>", correct: true}],
    },
    {
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        answer: [{text: "if i<>5", correct: false}, {text: "if(i! = 5)", correct: true},  {text: "if i=! 5 then", correct: false}, {text: "if(i<>5)", correct: false}],
    },
    {
        question: "What is the correct JavaScript syntax to write 'Hello World'?",
        answer: [{text: "('Hello World');", correct: false}, {text: "echo 'Hello World';", correct: false}, {text: "document.write('Hello World');", correct: true}, {text: "response.write('Hello World');", correct: false}],
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        answer: [{text: "msg('Hello World');", correct: false}, {text: "alert('Hello World');", correct: true}, {text: "msgBox('Hello World');", correct: false}, {text: "alertBox('Hello World');", correct: false}],
    },
    {
        question: "How to write an IF statement in JavaScript?",
        answer: [{text: "if i = 5 then", correct: false}, {text: "if i = 5", correct: false}, {text: "if i == 5 then", correct: false}, {text: "if(i == 5)", correct: true}],
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answer: [{text: "js tag", correct: false}, {text: "javascript tag", correct: false},  {text:"script tag", correct: true}, {text:"scripting tag", correct: false}],
    },
]

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() -.5)
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide')
    countdown()
    setNextQuestion()
}
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
function showQuestion(question) {
    console.log(question)
    questionElement.innerText = question.question
    question.answer.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct

        } else {
            timeLeft-=10
            console.log(timeLeft);
            answer.correct= true
        }
        button.addEventListener('click', selectAnswer)
        answerButtonElement.appendChild(button)
    })
} 
function resetState() {
    while (answerButtonElement.firstChild)  {
        answerButtonElement.removeChild
        (answerButtonElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    currentQuestionIndex++
//    setStatusClass(document, correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1)
{
    startButton.innerText = 'Restart'
    setNextQuestion()
}else{
    startButton.classList.remove('hide')
}}

function setStatusClass(element, correct) {
    console.log(element)
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element, correct) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

var timeLeft = 180;
function countdown() {
    
    var timeInterval = setInterval(function() {
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + 'seconds remaining';
        timeLeft--;
        console.log(timeLeft);
      } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + 'second remaining';
        timeLeft--;
        console.log(timeLeft);
      } else {
        timerEl.textContent = 0;
        clearInterval(timeInterval);
        console.log(timeLeft);
        quizOver();
      }
    }, 1000);
  }

  startButton.onclick = countdown;

// function for quizOver
function quizOver(){
    clearInterval(timer);
    var finalScore = document.getElementById("finalScore")
    finalScore.testContent = timer
}

// function for High Score/local