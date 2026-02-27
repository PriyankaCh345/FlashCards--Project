const flashcardsContainer = document.getElementById("flashcards-container");
const nextBtn = document.getElementById("next-card");
const addBtn = document.getElementById("add-card");

const questionInput = document.getElementById("question-input");
const answerInput = document.getElementById("answer-input");

// Default cards
let flashcards = [
  { question: "What is JavaScript?", answer: "A programming language for the web." },
  { question: "What is HTML?", answer: "Structure of a webpage." },
  { question: "What is CSS?", answer: "Styling of a webpage." }
];

let currentIndex = 0;
let showingAnswer = false;

// Display card
function showCard() {
  if (flashcards.length === 0) {
    flashcardsContainer.innerHTML = "<p>No flashcards available.</p>";
    return;
  }

  const card = flashcards[currentIndex];

  flashcardsContainer.innerHTML = `
    <div class="card">
      <p>${showingAnswer ? card.answer : card.question}</p>
    </div>
  `;
}

// Toggle answer on click
flashcardsContainer.addEventListener("click", function () {
  showingAnswer = !showingAnswer;
  showCard();
});

// Next button
nextBtn.addEventListener("click", function () {
  if (flashcards.length === 0) return;

  currentIndex = (currentIndex + 1) % flashcards.length;
  showingAnswer = false;
  showCard();
});

// Add new flashcard
addBtn.addEventListener("click", function () {
  const question = questionInput.value.trim();
  const answer = answerInput.value.trim();

  if (question === "" || answer === "") {
    alert("Please enter both question and answer");
    return;
  }

  flashcards.push({ question, answer });

  questionInput.value = "";
  answerInput.value = "";

  alert("Flashcard added successfully!");
});

showCard();