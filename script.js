// elements needed
var startEl = document.querySelector('#start');
var quizEl = document.querySelector('#quiz');
var endEl = document.querySelector('#end');
var startButton = document.querySelector('#start button');
var submitScoreButton = document.querySelector('#start button');
var quizTitle = document.querySelector('#title');
var optionEl = document.querySelector('#options');
var timeEl =document.querySelector('#time');
var scoreEl = document.querySelector('#score');

let indexQuestion = 0;
// question array
var questions = [
    {
        title: "JavaScript is a ______-side programming language",
        possibleAnswers: ['Client', 'Server', 'Both', 'None'],
        correct: ['Both']
    },
    {
        title: "What do you put around string values?",
        possibleAnswers: ['Quotes', 'Brackets', 'Parentheses', 'Nothing'],
        correct: [0]
    },
    {
        title: "What does Math.floor round to?",
        possibleAnswers: ['The nearest integer', 'Rounds up to the nearest integer', 'Rounds down to the nearest integer', 'Sets the number to 0'],
        correct: 2
    },
    {
        title: "When using .toUpperCase, what do you put at the end to execute the function?",
        possibleAnswers: ['.toUpperCase;', '.toUpperCase();', '.toUpperCase[];', '.toUpperCase{};'],
        correct: 1
    },
];
console.log(questions)

var cursor = 0;

// starts quiz
startButton.addEventListener('click', function () {
    startEl.style.display = 'none';
    endEl.style.display = 'none';
    scoreEl.style.display = 'none';
    quizEl.style.display = 'block';
    displayQuestion();
});

function displayQuestion() {
    let renderQuestion = questions[indexQuestion];
    quizTitle.textContent = renderQuestion.title;
    optionEl.textContent = '';
    renderQuestion.possibleAnswers.forEach(function (choice, i) {
        let choiceButtons = document.createElement('button');
        choiceButtons.setAttribute('value', choice);
        choiceButtons.textContent = choice;
        optionEl.onclick = nextQuestion;
        optionEl.appendChild(choiceButtons);
    });

};

function nextQuestion() {

    // if (this.value !== questions.correct) {
    //     window.alert('Wrong')
    // } else {
    //     window.alert('Correct')
    // };
    if (this.value == questions.correct) {
        window.alert('You got it right! Good job!')
    } else {
        window.alert('You got it wrong idiot')
    };
    indexQuestion++
    displayQuestion();
};

function correction(response) {
    if (response){
        alert.innerText= 'Good';
        window.alert('');
    } else {
        alert.innerText = 'Bad'
    }
}

// timer function
var secondsLeft = 20
function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft
        if (secondsLeft === 0) {
            window.alert('Time ran out! You fail slowpoke');
            reset();
        }

    }, 1000);
};


// resets quiz
function reset() {
    window.location
    
};

submitScoreButton.addEventListener('click', function () {
    reset();
});
