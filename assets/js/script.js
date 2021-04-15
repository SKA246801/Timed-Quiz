const question = document.querySelector('.question');
const choices = document.querySelectorAll('.choice');
const progressText = document.querySelector('#progressText');
const timerEl = document.querySelector('.timer');
const answersEl = document.querySelector('.answer-choices');

let time = 45
let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0

const questions = [
{question:"The sky is blue", choices:["True", "False"], answer: "True",},
{question:"A rock is a vegetable", choices:["True", "False"], answer: "False",},
{question:"Austin is a continent", choices:["True", "False"], answer: "False",},
{question:"Coding is boring", choices:["True", "False"], answer: "False",},
{question:"This quiz works", choices:["True", "False"], answer: "True",}]


let max = questions.length

function startTimer() {
    
    timerInterval = setInterval(function(){
        timerEl.innerText = 'Timer: ' + time
        time--
        if (time === -2) {
            clearInterval(timerInterval)
            alert("Time's up, try again")
            location.href = "./highscores.html"
        }
    }, 1000) 
}

function startGame () {
    questionCounter = 0
    score = 0
    getNewQuestion()
    startTimer()
}

function getNewQuestion () {
    
    let questionNumber = questionCounter + 1
    progressText.innerText = `Question ${questionNumber} of ${max}`

    currentQuestion = questions[questionCounter] 
    question.innerText = currentQuestion.question
    answersEl.innerText = ''
    currentQuestion.choices.forEach(function (choice){
        var choiceBtn = document.createElement('button')
        choiceBtn.innerText = choice
        choiceBtn.setAttribute('value', choice)
        choiceBtn.setAttribute('class', 'btn')
        choiceBtn.addEventListener('click', answers)
        answersEl.appendChild(choiceBtn)

    })

}


function answers () {
    console.log(this.value)

        if (this.value === currentQuestion.answer){
            score++
            console.log('correct')
        } else {
            console.log('incorrect')
        }
        questionCounter++
    
    console.log(questionCounter)
    if (questionCounter === 5) {
        location.href = "end.html"
        localStorage.setItem('mostRecentScore', score)
        getNewQuestion()
    }
    getNewQuestion()
}

incrementScore = num => {
    score += num
    scoreTect.innerText = score
}

startGame ()