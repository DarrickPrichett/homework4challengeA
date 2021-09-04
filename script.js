const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answers-buttons')
let shuffleQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffleQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffleQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    questionElement.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.innerText
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChile(button)
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
}

const questions = [
    {
        question: "What is 2 + 2?",
        answers: [{text: '4', correct: true}, {text: '22', correct: false}
    ]
    },
    {
        title: "question 2",
        choices: ["test1", "test2", "test3", "test4"],
        answer: "test2"
    },
    {
        title: "question 3",
        choices: ["test1", "test2", "test3", "test4"],
        answer: "test3"
    },
    {
        title: "question 4",
        choices: ["test1", "test2", "test3", "test4"],
        answer: "test4"
    },
    {
        title: "question 5",
        choices: ["test1", "test2", "test3", "test4"],
        answer: "test3"
    },
    {
        title: "question 6",
        choices: ["test1", "test2", "test3", "test4"],
        answer: "test1"
    },
    {
        title: "question 7",
        choices: ["test1", "test2", "test3", "test4"],
        answer: "test4"
    },
    {
        title: "question 8",
        choices: ["test1", "test2", "test3", "test4"],
        answer: "test2"
    },
    {
        title: "question 9",
        choices: ["test1", "test2", "test3", "test4"],
        answer: "test2"
    },
    {
        title: "question 10",
        choices: ["test1", "test2", "test3", "test4"],
        answer: "test3"
    },
]