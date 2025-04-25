const questions = [
    { question: "Which is the largest animal in the world?", answers: [ { text: "Shark", correct: false }, { text: "Blue whale", correct: true }, { text: "Elephant", correct: false }, { text: "Giraffe", correct: false } ] },
    { question: "Which is the smallest country in the world?", answers: [ { text: "Monaco", correct: false }, { text: "San Marino", correct: false }, { text: "Vatican City", correct: true }, { text: "Liechtenstein", correct: false } ] },
    { question: "Which is the longest river in the world?", answers: [ { text: "Amazon River", correct: false }, { text: "Nile River", correct: true }, { text: "Yangtze River", correct: false }, { text: "Mississippi River", correct: false } ] },
    { question: "What is the capital of Japan?", answers: [ { text: "Seoul", correct: false }, { text: "Tokyo", correct: true }, { text: "Beijing", correct: false }, { text: "Kyoto", correct: false } ] },
    { question: "Who painted the Mona Lisa?", answers: [ { text: "Vincent van Gogh", correct: false }, { text: "Leonardo da Vinci", correct: true }, { text: "Pablo Picasso", correct: false }, { text: "Claude Monet", correct: false } ] },
    { question: "What is the chemical symbol for gold?", answers: [ { text: "Au", correct: true }, { text: "Ag", correct: false }, { text: "Pb", correct: false }, { text: "Fe", correct: false } ] },
    { question: "What is the main ingredient in sushi?", answers: [ { text: "Chicken", correct: false }, { text: "Fish", correct: true }, { text: "Rice", correct: false }, { text: "Beef", correct: false } ] },
    { question: "Who wrote the Harry Potter books?", answers: [ { text: "J.R.R. Tolkien", correct: false }, { text: "J.K. Rowling", correct: true }, { text: "George R.R. Martin", correct: false }, { text: "C.S. Lewis", correct: false } ] }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        button.dataset.correct = answer.correct;

        button.addEventListener('click', selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = 'none';
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";

    if (isCorrect) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("incorrect");
    }

    // Disable all buttons after an answer is selected
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
    });

    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Your Score: ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
