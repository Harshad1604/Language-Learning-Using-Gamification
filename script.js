document.addEventListener('DOMContentLoaded', function() {
    const words = ["python", "programming", "language", "computer", "algorithm"];
    let currentWord = '';
    
    const shuffledWordElement = document.getElementById('shuffled-word');
    const wordInput = document.getElementById('word-input');
    const submitButton = document.getElementById('submit-button');
    const message = document.getElementById('message');
    const newGameButton = document.getElementById('new-game-button');
  
    function shuffleWord(word) {
      return word.split('').sort(() => Math.random() - 0.5).join('');
    }
  
    function newGame() {
      currentWord = words[Math.floor(Math.random() * words.length)];
      const shuffledWord = shuffleWord(currentWord);
      shuffledWordElement.textContent = shuffledWord;
      wordInput.value = '';
      message.textContent = '';
    }
  
    function checkWord() {
      const guessedWord = wordInput.value.toLowerCase();
      if (guessedWord === currentWord) {
        message.textContent = 'Correct! You unscrambled the word.';
      } else {
        message.textContent = 'Incorrect. Try again!';
      }
    }
  
    submitButton.addEventListener('click', checkWord);
    newGameButton.addEventListener('click', newGame);
  
    newGame();
  });
  function openPopup() {
    document.getElementById("popupWindow").style.display = "block";
}

function closePopup() {
    document.getElementById("popupWindow").style.display = "none";
}
  