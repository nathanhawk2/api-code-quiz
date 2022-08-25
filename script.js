// base starting state for reset button
var state = 'start';

// elements needed
var startEl = document.querySelector('#start');
var quizEl = document.querySelector('#quiz');
var endEl = document.querySelector('#end');
var startButton = document.querySelector('#start button');
var submitScoreButton = document.querySelector('#start button');
var quizTitle = document.querySelector('#title');
var optionEl = document.querySelector('#options');

let indexQuestion = 0;
// question array
var questions = [
    {
        title: "JavaScript is a ______-side programming language",
        possibleAnswers: ['Client', 'Server', 'Both', 'None'],
        correct: 'Both'
    },
    {
        title: "What do you put around string values?",
        possibleAnswers: ['Quotes', 'Brackets', 'Parentheses', 'Nothing'],
        correct: 'Quotes'
    },
    {
        title: "What does Math.floor round to?",
        possibleAnswers: ['The nearest integer', 'Rounds up to the nearest integer', 'Rounds down to the nearest integer', 'Sets the number to 0'],
        correct: 'Rounds down to the nearest integer'
    },
    {
        title: "When using .toUpperCase, what do you put at the end to execute the function?",
        possibleAnswers: ['.toUpperCase;', '.toUpperCase();', '.toUpperCase[];', '.toUpperCase{};'],
        correct: 'toUpperCase();'
    },
];

var cursor = 0;

// starts quiz
startButton.addEventListener('click', function () {
    startEl.style.display = 'none';
    quizEl.style.display = 'block';
    displayQuestion();
});

function displayQuestion() {
    let renderQuestion = questions[indexQuestion];
    quizTitle.textContent = renderQuestion.title;
    optionEl.textContent = '';
    renderQuestion.possibleAnswers.forEach(function(choice, i){
        let choiceButtons = document.createElement('button');
        choiceButtons.setAttribute('value', choice);
        choiceButtons.textContent = i + choice;
        optionEl.onclick = nextQuestion;

        optionEl.appendChild(choiceButtons);
    });

};

function nextQuestion() {

    if (this.value !== questions[indexQuestion].correct) {
        window.alert( "Wrong")
    } else {
        window.alert('Correct')
    };

    indexQuestion++
    displayQuestion();

};

// resets quiz
function reset() {
    state = 'start';
};

submitScoreButton.addEventListener('click', function () {
    reset();
});

// next question
// quizTitle.addEventListener('click', function() {

// });
// let i = 0
// console.log(questions[i].title)