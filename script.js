const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')
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
        answer: "script tag"
    },
]

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
    // Iterate over the questions array and display each question in a confirmation box
    for(let i = 0; i < questions.length; i++) {
    var answer = confirm(questions[i].question);
    // function to check whether answer is right or wrong. Increment the score accordingly
    if (answer === questions[i].answer) {
    correctAnswers++;
    alert('You are correct');
} else {
    timer -= 10;
    alert('You are incorrect');
}
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    questions([currentQuestionIndex])
}

let currentQuestionIndex

var toggle = function showQuestion(question) {
    questionContainerElement.innerText = question.question
    questionContainerElement.answer.forEach(answer => {
        let button = document.createElement('button')
        button.innerText = answer.innerText
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
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
    setStatusClass(document, correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        
    }
}





}
// function for timer
var timer = 60
var index = 0
function test(){
    var example = document.getElementById("example")
    example.testContent = questions.index.question
}

function timer () {
    timer --
    if (timer<=0){
         quizOver()
    }
}
// function for quizOver
function quizOver(){
    clearInterval(timer);
    var finalScore = document.getElementById("finalScore")
    finalScore.testContent = timer
}

// function for High Score/local