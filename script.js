const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')
// create a function to keep track of the score
let correctAnswers = 0;
let wrongAnswers = 0;

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    // Iterate over the questions array and display each question in a confirmation box
    for(let i = 0; i < choice.length; i++) {
    const answer = confirm(choice[i].title);
    // function to check whether answer is right or wrong. Increment the score accordingly
    if (answer === choice[i].answer) {
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
    showQuestion(shuffleQuestions[currentQuestionIndex])
}

let shuffleQuestions, currentQuestionIndex

function showQuestion(question) {
    questionContainerElement.innerText = question.question
    questionContainerElement.choice.forEach(choice => {
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

var questions = [
    {
        title: "The external JavaScript file must contain the <script> tag.",
        choice: "True",
        choice: "False",
        answer: "False"
    },
    {
        title: "Which one of these keywords is NOT a JavaScript data type",
        choice: "undefined",
        choice: "boolean",
        choice: "dictionary",
        choice: "string",
        answer: "dictionary"
    },
    {
        title: "How do you create a function in JavaScript?",
        choice1: "function myFunction()",
        choice2: "function.myFunction",
        choice3: "function(myFunction)",
        choice4: "function.myFunction()",
        answer: "function myFunction()"
    },
    {
        title: "How do you call a function named 'myFunction'?",
        choice1: "call myFunction()",
        choice2: "call function myFunction()",
        choice3: "myFunction()",
        answer: "myFunction()"
    },
    {
        title: "Where is the correct place to insert a JavaScript?",
        choice1: "The <head> section",
        choice2: "Both the <head> and the <body> section are correct",
        choice3: "The <body> section",
        choice4: "Anywhere in the JavaScript",
        answer: "Both the <head> and the <body> section are correct"
    },
    {
        title: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        choice1: "<script href='xxx.js'> ",
        choice2: "<script ref='xxx.js'>",
        choice3: "<script name='xxx.js'>",
        choice4: "<script src='xxx.js'>",
        answer: "<script src='xxx.js'>"
    },
    {
        title: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        choice1: "if i<>5",
        choice2: "if(i! = 5)",
        choice3: "if i=! 5 then",
        choice4: "if(i<>5)",
        answer: "if(i! = 5)"
    },
    {
        title: "What is the correct JavaScript syntax to write 'Hello World'?",
        choice1: "('Hello World');",
        choice2: "echo 'Hello World';",
        choice3: "document.write('Hello World');",
        choice4: "response.write('Hello World');",
        answer: "document.write('Hello World');"
    },
    {
        title: "How do you write 'Hello World' in an alert box?",
        choice1: "msg('Hello World');",
        choice2: "alert('Hello World');",
        choice3: "msgBox('Hello World');",
        choice4: "alertBox('Hello World');",
        answer: "alert('Hello World');"
    },
    {
        title: "How to write an IF statement in JavaScript?",
        choice1: "if i = 5 then",
        choice2: "if i = 5",
        choice3: "if i == 5 then",
        choice4: "if(i == 5)",
        answer: "if(i == 5)"
    },
    {
        title: "Inside which HTML element do we put the JavaScript?",
        choice1: "js tag",
        choice2: "javascript tag",
        choice3: "script tag",
        choice4: "scripting tag",
        answer: "script tag"
    },
    {
        title: "question?",
        choice1: "",
        choice2: "",
        choice3: "",
        choice4: "",
        answer: ""
    },
 
]




}
// function for timer
var timer = 60
var index = 0
function test(){
    var example = document.getElementById("example")
    example.testContent = questions.index.title
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