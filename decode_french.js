const sentences = {
  "Comment ça va?": "How are you?",
  "Quelle heure est-il?": "What time is it?",
  "J'aime apprendre les langues": "I like learning languages.",
  "Où est la bibliothèque?": "Where is the library?",
  "Aujourd'hui est un bon jour.": "Today is a good day."
};

let currentSentence = selectRandomSentence();
document.getElementById("sentence").innerText = currentSentence;

document.getElementById("checkAnswer").addEventListener("click", function() {
  const userInput = document.getElementById("userInput").value;
  checkAnswer(userInput);
});

document.getElementById("nextSentence").addEventListener("click", function() {
  currentSentence = selectRandomSentence();
  document.getElementById("sentence").innerText = currentSentence;
  document.getElementById("userInput").value = '';
  document.getElementById("feedback").innerText = '';
});

function selectRandomSentence() {
  const keys = Object.keys(sentences);
  return keys[Math.floor(Math.random() * keys.length)];
}

function checkAnswer(userInput) {
  const correctAnswer = sentences[currentSentence];
  if (userInput.toLowerCase() === correctAnswer.toLowerCase()) {
      document.getElementById("feedback").innerText = "Correct! Well done.";
      document.getElementById("feedback").style.color = "green";
  } else {
      document.getElementById("feedback").innerText = 'Incorrect. Correct answer:${correctAnswer}';
      document.getElementById("feedback").style.color = "red";
  }
}
function openPopup() {
  document.getElementById("popupWindow").style.display = "block";
}

function closePopup() {
  document.getElementById("popupWindow").style.display = "none";
}