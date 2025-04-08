const words = [
  { french: 'Hello', english: 'Hello' },
  { french: 'House', english: 'House' },
  { french: 'Book', english: 'Book' },
  { french: 'Dog', english: 'Dog' },
  { french: 'Cat', english: 'Cat' },
  { french: 'Flower', english: 'Flower' },
  { french: 'Car', english: 'Car' },
  { french: 'Tree', english: 'Tree' },
  { french: 'Kitchen', english: 'Kitchen' },
  { french: 'Mountain', english: 'Mountain' }
];

const gridSize = 10;
let selectedCells = [];
let selectedWord = {};

// Function to select a random word from the list
function selectRandomWord() {
  const randomWordIndex = Math.floor(Math.random() * words.length);
  selectedWord = words[randomWordIndex];
}

// Function to create grid
function createGrid() {
  const wordSearch = document.getElementById('word-search');
  wordSearch.innerHTML = ''; // Clear previous grid

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.row = i;
      cell.dataset.col = j;
      cell.textContent = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // Random letter
      wordSearch.appendChild(cell);
    }
  }
}

// Function to display word list
function displayWordList() {
  const wordList = document.getElementById('word-list');
  wordList.textContent = selectedWord.french;
}

// Function to initialize the game
function initializeGame() {
  clearFeedback();
  selectRandomWord();
  displayWordList();
  createGrid();
}

// Initialize the game
initializeGame();

// Add event listener for search button
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', () => {
  const enteredWord = selectedCells.map(cell => cell.textContent).join('');
  const isCorrect = enteredWord.toUpperCase() === selectedWord.english.toUpperCase();
  displayFeedback(isCorrect);
});

// Add event listener for undo button
const undoButton = document.getElementById('undo-button');
undoButton.addEventListener('click', () => {
  if (selectedCells.length > 0) {
    const lastSelectedCell = selectedCells.pop();
    lastSelectedCell.classList.remove('selected');
    clearFeedback();
  }
});

// Add event listener for reset button
const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', () => {
  selectedCells.forEach(cell => {
    cell.classList.remove('selected');
  });
  selectedCells = [];
  clearFeedback();
});

// Add event listener for skip button
const skipButton = document.getElementById('skip-button');
skipButton.addEventListener('click', () => {
  selectedCells.forEach(cell => {
    cell.classList.remove('selected');
  });
  selectedCells = [];
  initializeGame();
});

// Add event listener for cell click
const wordSearch = document.getElementById('word-search');
wordSearch.addEventListener('click', (e) => {
  const clickedCell = e.target;
  if (!clickedCell.classList.contains('selected')) {
    clickedCell.classList.add('selected');
    selectedCells.push(clickedCell);
  }
});

// Function to display feedback based on the correctness of the answer
function displayFeedback(isCorrect) {
  const feedback = document.getElementById('feedback');
  feedback.textContent = isCorrect ? 'Correct answer!' : 'Incorrect answer!';
  feedback.style.color = isCorrect ? 'green' : 'red';
}

// Function to clear the feedback message
function clearFeedback() {
  const feedback = document.getElementById('feedback');
  feedback.textContent = '';
}
function openPopup() {
  document.getElementById("popupWindow").style.display = "block";
}

function closePopup() {
  document.getElementById("popupWindow").style.display = "none";
}
