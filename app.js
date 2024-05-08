document.addEventListener("DOMContentLoaded", () => {
  const selectElement = document.getElementById("quiz-select");
  quizzes.forEach((quiz, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = quiz.name;
    selectElement.appendChild(option);
  });
});

function loadSelectedQuiz() {
  const selectedIndex = document.getElementById("quiz-select").value;
  currentAnswers = {}; // Reset answers

  // Directly reset progress bar and score
  resetProgressBar();
  resetScore();

  displayQuiz(selectedIndex);
  resetStylesAndInputs(); // This function now also resets the inputs and styles
}

function resetProgressBar() {
  const progressBar = document.getElementById("progress-bar");
  progressBar.style.width = "0%";
  progressBar.textContent = "0%";
}

function resetScore() {
  const scoreElement = document.getElementById("score");
  scoreElement.textContent = "Correct: 0, Wrong: 0";
}

function resetStylesAndInputs() {
  // Reset styles for all question navigation buttons
  const navButtons = document.querySelectorAll(".question-nav-button");
  navButtons.forEach((button) => {
    button.classList.remove("correct", "wrong");
  });

  // Enable all input elements and remove feedback texts
  const inputs = document.querySelectorAll(
    "#quiz-container input[type='radio'], #quiz-container input[type='checkbox']"
  );
  inputs.forEach((input) => {
    input.disabled = false;
    input.checked = false;
  });

  // Remove all feedback and explanation elements
  const feedbackElements = document.querySelectorAll(
    ".correct, .wrong, .explanation"
  );
  feedbackElements.forEach((element) => element.remove());
}

let currentQuiz,
  currentAnswers = {};

function displayQuiz(index) {
  currentQuiz = quizzes[index];
  const menu = document.getElementById("side-menu");
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";
  menu.innerHTML = `<h3>Questions</h3>`;

  currentQuiz.questions.forEach((question, i) => {
    const questionButton = document.createElement("button");
    questionButton.textContent = `Question ${i + 1}`;
    questionButton.onclick = () => displayQuestion(i);
    questionButton.className = "question-nav-button";
    menu.appendChild(questionButton);
  });

  displayQuestion(0); // Display the first question by default
  updateProgressBar();
}

function displayQuestion(questionIndex) {
  const question = currentQuiz.questions[questionIndex];
  const container = document.getElementById("quiz-container");
  container.innerHTML = `<h2>${currentQuiz.name}</h2><p>${question.question}</p>`;

  // Create a copy of the options array to shuffle
  const options = [...question.options];
  shuffleArray(options);

  options.forEach((option, idx) => {
    const originalIndex = question.options.indexOf(option); // find original index of the option
    const label = document.createElement("label");
    const inputType = question.multi ? "checkbox" : "radio";
    const input = document.createElement("input");
    input.type = inputType;
    input.name = "question";
    input.value = originalIndex; // use original index to track selected options correctly
    input.checked =
      currentAnswers[questionIndex] &&
      currentAnswers[questionIndex].selected.includes(originalIndex);
    input.disabled = currentAnswers[questionIndex] !== undefined;
    label.appendChild(input);
    label.appendChild(document.createTextNode(option));
    container.appendChild(label);
    container.appendChild(document.createElement("br"));
  });

  const button = document.createElement("button");
  button.innerText = "Submit Answer";
  button.className = "submit-button";
  button.disabled = currentAnswers[questionIndex] !== undefined;
  button.onclick = () => submitAnswer(question, questionIndex);
  container.appendChild(button);

  // Add navigation buttons for moving between any questions
  addNavigationButtons(questionIndex);

  if (currentAnswers[questionIndex]) {
    displayFeedback(questionIndex, question);
  }
  updateActiveQuestion(questionIndex);
}
function addNavigationButtons(currentIndex) {
  const container = document.getElementById("quiz-container");

  // Create previous button
  const previousButton = document.createElement("button");
  previousButton.textContent = "Previous Question";
  previousButton.className = "nav-button";
  previousButton.onclick = () => navigateQuestions(currentIndex, "prev");
  previousButton.disabled = currentIndex === 0; // Disable if it's the first question

  // Create next button
  const nextButton = document.createElement("button");
  nextButton.textContent = "Next Question";
  nextButton.className = "nav-button";
  nextButton.onclick = () => navigateQuestions(currentIndex, "next");
  nextButton.disabled = currentIndex >= currentQuiz.questions.length - 1; // Disable if it's the last question

  // Append buttons
  container.appendChild(previousButton);
  container.appendChild(nextButton);
}

function navigateQuestions(currentIndex, direction) {
  const newIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;
  if (newIndex >= 0 && newIndex < currentQuiz.questions.length) {
    displayQuestion(newIndex);
  }
}

function submitAnswer(question, questionIndex) {
  const selected = Array.from(
    document.querySelectorAll(`input[name="question"]:checked`),
    (input) => parseInt(input.value)
  );
  const isCorrect = question.multi
    ? arraysEqual(selected.sort(), question.answer.sort())
    : selected.length === 1 && question.answer.includes(selected[0]);

  currentAnswers[questionIndex] = { selected, isCorrect };

  Array.from(document.querySelectorAll(`input[name="question"]`)).forEach(
    (input) => (input.disabled = true)
  );

  updateQuestionButton(questionIndex, isCorrect);
  updateScore();
  displayFeedback(questionIndex, question);
  updateProgressBar();
  checkCompletion();
  addAnsweredQuestionNavButtons(questionIndex); // Update buttons after answer submission
}

function displayFeedback(questionIndex, question) {
  const container = document.getElementById("quiz-container");
  const resultText = document.createElement("p");
  resultText.className = currentAnswers[questionIndex].isCorrect
    ? "correct"
    : "wrong";
  resultText.textContent = currentAnswers[questionIndex].isCorrect
    ? "Correct!"
    : "Incorrect!";
  container.appendChild(resultText);

  if (!currentAnswers[questionIndex].isCorrect) {
    const correctAnswersText = document.createElement("p");
    correctAnswersText.className = "correct";
    correctAnswersText.textContent =
      "Correct answers: " +
      question.answer.map((a) => question.options[a]).join(", ");
    container.appendChild(correctAnswersText);
  }

  const explanationText = document.createElement("p");
  explanationText.className = "explanation";
  explanationText.textContent = `Explanation: ${question.explanation}`;
  container.appendChild(explanationText);
}

function updateProgressBar() {
  const progressBar = document.getElementById("progress-bar");
  const totalQuestions = currentQuiz.questions.length;
  const answeredQuestions = Object.keys(currentAnswers).length;
  const progressPercent = (answeredQuestions / totalQuestions) * 100;
  progressBar.style.width = `${progressPercent}%`;
  progressBar.textContent = `${Math.round(progressPercent)}%`;
}

function arraysEqual(a, b) {
  return a.length === b.length && a.every((val, index) => val === b[index]);
}

function updateQuestionButton(questionIndex, isCorrect) {
  const buttons = document.querySelectorAll("#side-menu button");
  buttons.forEach((button) => {
    button.classList.remove("active"); // Remove active class from all buttons
  });
  const currentButton = buttons[questionIndex];
  currentButton.classList.add("active"); // Add active class to the current button

  // Clear existing icons if any
  currentButton.innerHTML = `Question ${questionIndex + 1}`;
  const statusIcon = document.createElement("span");

  if (isCorrect) {
    currentButton.classList.add("correct");
    currentButton.classList.remove("wrong");
    statusIcon.textContent = "✅";
  } else {
    currentButton.classList.add("wrong");
    currentButton.classList.remove("correct");
    statusIcon.textContent = "❌";
  }

  currentButton.appendChild(statusIcon); // Append status icon to the button
}

function updateScore() {
  const scoreElement = document.getElementById("score");
  const totalCorrect = Object.values(currentAnswers).filter(
    (a) => a.isCorrect
  ).length;
  const totalWrong = Object.keys(currentAnswers).length - totalCorrect;
  scoreElement.textContent = `Correct: ${totalCorrect}, Wrong: ${totalWrong}`;
}

function checkCompletion() {
  const totalQuestions = currentQuiz.questions.length;
  const answeredQuestions = Object.keys(currentAnswers).length;
  if (answeredQuestions === totalQuestions) {
    const totalCorrect = Object.values(currentAnswers).filter(
      (a) => a.isCorrect
    ).length;
    const totalWrong = totalQuestions - totalCorrect;
    alert(
      `Quiz Completed!\nCorrect answers: ${totalCorrect}\nWrong answers: ${totalWrong}`
    );
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // swap elements
  }
}
