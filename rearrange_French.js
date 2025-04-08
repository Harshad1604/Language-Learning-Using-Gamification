const sentences = [
    "Le renard brun saute rapidement par-dessus le chien paresseux",
    "Le ciel est bleu aujourd'hui",
    "J'adore programmer"
  ];
  
  let currentSentenceIndex = 0;
  let scrambledSentence = '';
  
  function shuffleSentence(sentence) {
    return sentence.split(' ').sort(() => Math.random() - 0.5).join(' ');
  }
  
  function displaySentence() {
    const sentence = sentences[currentSentenceIndex];
    scrambledSentence = shuffleSentence(sentence);
    document.getElementById('scrambled-sentence').textContent = scrambledSentence;
  }
  
  function checkAnswer() {
    const userAnswer = document.getElementById('user-answer').value.trim();
    const correctAnswer = sentences[currentSentenceIndex];
    
    if (userAnswer === correctAnswer) {
      document.getElementById('result').textContent = "Correct!";
      document.getElementById('result').classList.remove('wrong');
      document.getElementById('result').classList.add('correct');
      
      // Move to the next sentence
      currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length;
      displaySentence();
    } else {
      document.getElementById('result').innerHTML = "Wrong answer. Try again!<br> The correct answer is: <strong>" + correctAnswer + "</strong>";
      document.getElementById('result').classList.remove('correct');
      document.getElementById('result').classList.add('wrong');
    }
  }
  
  
  
  
  function reset() {
    document.getElementById('user-answer').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('result').classList.remove('correct', 'wrong');
    
    // Move to the next sentence
    currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length;
    displaySentence();
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    displaySentence();
  });
  function openPopup() {
    document.getElementById("popupWindow").style.display = "block";
}

function closePopup() {
    document.getElementById("popupWindow").style.display = "none";
}
  