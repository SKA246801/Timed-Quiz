const question = document.querySelector('.question');
const choices = document.querySelectorAll('choice');
const progressText = document.querySelector('#progressText');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0


const questions = [{question:"The sky is blue", choice1: "True", choice2: "False", answer: 1,},
{question:"A rock is a vegetable", choice1: "True", choice2: "False", answer: 2,},
{question:"Austin is a continent", choice1: "True", choice2: "False", answer: 2,},
{question:"Coding is boring", choice1: "True", choice2: "False", answer: 2,},
{question:"This quiz works", choice1: "True", choice2: "False", answer: 1,}]

let max = questions.length
startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > max ) {
        localStorage.setItem('mostRecentScore, score')

        return window.location.assign('/end.html')
    }

    questionCounter++

    progressText.innerText = `Question ${questionCounter} of ${max}`
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        if(selectedAnswer === currentQuestion.answer) {
            score++
        }

    })
})

incrementScore = num => {
    score += num
    scoreTect.innerText = score
}


startGame ()