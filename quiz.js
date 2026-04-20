// Questions with answers
const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hyperlinks and Text Markup Language", correct: false },
      { text: "Home Tool Markup Language", correct: false },
      { text: "Hyper Text Marketing Language", correct: false },
      { text: "HyperText Markup Language", correct: true }
    ]
  }
  ,
  {
    question: "Which tag is used to create an input field?",
    answers: [
      { text: "<form>", correct: false },
      { text: "<input>", correct: true },
      { text: "<textfield>", correct: false },
      { text: "<type>", correct: false }
    ]
  },
  {
    question: "Which tag is used to create a table?",
    answers: [
      { text: "<table>", correct: true },
      { text: "<tab>", correct: false },
      { text: "<tr>", correct: false },
      { text: "<td>", correct: false }
    ]
  },
  {
    question: " Which is the largest heading tag in HTML?",
    answers: [
      { text: "<h6>", correct: false },
      { text: "<head>", correct: false },
      { text: "<h1>", correct: true },
      { text: "<heading>", correct: false }
    ]
  },
  {
    question: "Which tag is used to create a hyperlink?",
    answers: [
      { text: "<link>", correct: false },
      { text: "<a>", correct: true },
      { text: "<href>", correct: false },
      { text: "<url>", correct: false }
    ]
  },
  {
    question: "Which tag is used to display an image?",
    answers: [
      { text: "<img>", correct: true },
      { text: "<image>", correct: false },
      { text: "<pic>", correct: false },
      { text: "<src>", correct: false }
    ]
  },
  {
    question: "Which tag is used for a line break?",
    answers: [
      { text: "<lb>", correct: false },
      { text: "<break>", correct: false },
      { text: "<br>", correct: true },
      { text: "<line>", correct: false }
    ]
  },
  {
    question: "What is the root element of an HTML document?",
    answers: [
      { text: "<body>", correct: false },
      { text: "<head>", correct: false },
      { text: "<html>", correct: true },
      { text: "<root>", correct: false }
    ]
  },
  {
    question: "Which tag is used to add CSS inside HTML?",
    answers: [
      { text: "<style>", correct: true },
      { text: "<css>", correct: false },
      { text: "<script>", correct: false },
      { text: "<design>", correct: false }
    ]
  }

];

// DOM elements
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const resultElement = document.getElementById("result");

let currentQuestionIndex = 0;
let score = 0;

// Start button click → begins quiz
startButton.addEventListener("click", startQuiz);

// Next button click → move to next question or show result
nextButton.addEventListener("click", () => {
  if (nextButton.innerText === "Play Again") {
    startQuiz(); // Restart quiz
    return;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

// Start quiz: reset everything
function startQuiz() {
  startButton.style.display = "none"; // Hide start button
  currentQuestionIndex = 0;
  score = 0;
  resultElement.innerText = ""; // Clear old result
  nextButton.innerText = "Next"; // Reset button text
  showQuestion();
}

// Show current question
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  // Create answer buttons dynamically
  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    button.addEventListener("click", () => selectAnswer(answer));
    answerButtons.appendChild(button);
  });
}

// Clear previous buttons
function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

// Handle answer click
function selectAnswer(answer) {
  if (answer.correct) {
    score++;
  }
  nextButton.style.display = "block"; // Show next button
}

// Show quiz result
function showResult() {
  resetState();
  questionElement.innerText = "Quiz Completed!";
  resultElement.innerText = `You scored ${score} out of ${questions.length}`;
  nextButton.innerText = "Play Again"; // Change button text
  nextButton.style.display = "block";
}

// Show start button initially
startButton.style.display = "block";
