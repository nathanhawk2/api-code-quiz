// elements needed
var startEl = document.querySelector('#start');
var quizEl = document.querySelector('#quiz');
var endEl = document.querySelector('#end');
var startButton = document.querySelector('#start button');
var submitScoreButton = document.querySelector('#submit');
var quizTitle = document.querySelector('#title');
var optionEl = document.querySelector('#options');
var timeEl = document.querySelector('#time');
var scoreEl = document.querySelector('#score');
var scorePageEl = document.querySelector('#scorePage');
var timerInterval
var highscore = 0
var initEl = document.querySelector('#initials');

let indexQuestion = 0;
// question array
var questions = [
    {
        title: "JavaScript is a ______-side programming language",
        possibleAnswers: ['Client', 'Server', 'Both', 'None'],
        correct: 2
    },
    {
        title: "What do you put around string values?",
        possibleAnswers: ['Quotes', 'Brackets', 'Parentheses', 'Nothing'],
        correct: 0
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

var cursor = 0;
displayScores();

// starts quiz
startButton.addEventListener('click', function () {
    setTime()
    timeEl.textContent = 'Time Left: 20 seconds'
    startEl.style.display = 'none';
    quizEl.style.display = 'block';
    scorePageEl.style.display = 'none';
    displayQuestion();
});
// sets up quiz content for each question
function displayQuestion() {
    let renderQuestion = questions[indexQuestion];
    quizTitle.textContent = renderQuestion.title;
    optionEl.textContent = '';
    renderQuestion.possibleAnswers.forEach(function (choice, i) {
        let choiceButton = document.createElement('button');
        choiceButton.setAttribute('value', choice);
        choiceButton.textContent = choice;
        choiceButton.onclick = nextQuestion;
        optionEl.appendChild(choiceButton);
    });

};
// checks to see if answer was correct, then cycles to next question
function nextQuestion() {
    var correct_answer = questions[indexQuestion].possibleAnswers[questions[indexQuestion].correct];
    if (this.value === correct_answer) {
        window.alert('You got it right! Good job!')
        highscore++
    } else {
        window.alert('You got it wrong.')
        secondsLeft -= 3
    };
    indexQuestion++

    if (indexQuestion < 4) {
        displayQuestion();
    } else {
        submitPage();
    }

};

// timer function
var secondsLeft = 20
function setTime() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = 'Time Left: ' + secondsLeft + ' seconds'
        if (secondsLeft === 0) {
            window.alert('Time ran out! You fail slowpoke');
            submitPage();
        }

    }, 1000);
};

// submit score button and high score display function
submitScoreButton.addEventListener('click', function () {
    var endScoreInit = {
        name: initEl.value,
        score: highscore
    }
    localStorage.setItem('init-score', JSON.stringify(endScoreInit))
    displayScores();

});

function displayScores() {
    var disScore = localStorage.getItem('init-score');
    // disScore = JSON.parse(disScore);
    // console.log(disScore)
    // console.log(disScore.length)

    var gridScore = document.createElement('div');
    gridScore.textContent = disScore
    scorePageEl.appendChild(gridScore);
    console.log(gridScore)

};

function submitPage() {
    scorePageEl.style.display = 'block';
    timeEl.textContent = 'none'
    startEl.style.display = 'none';
    endEl.style.display = 'block';
    scoreEl.style.display = 'none';
    quizEl.style.display = 'none';
    clearInterval(timerInterval);
    timeEl.style.display = 'none';
}

