document.addEventListener("DOMContentLoaded", function() {
    const words = document.querySelectorAll('.word');
  
    words.forEach(word => {
      const translation = word.querySelector('td:last-child').innerText.split('(')[1].trim(); // Extracting English translation
      const frenchWord = word.querySelector('td:first-child').innerText; // Extracting French word
      word.addEventListener('mouseenter', () => {
        showTranslation(word, translation);
      });
      word.addEventListener('mouseleave', () => {
        hideTranslation(word);
      });
    });
  
    function showTranslation(word, translation) {
      const translationDiv = document.createElement('div');
      translationDiv.classList.add('translation');
      translationDiv.textContent = translation;
      word.querySelector('td:last-child').appendChild(translationDiv);
    }
  
    function hideTranslation(word) {
      const translationDiv = word.querySelector('.translation');
      if (translationDiv) {
        translationDiv.remove();
      }
    }
  });
  function openPopup() {
    document.getElementById("popupWindow").style.display = "block";
}

function closePopup() {
    document.getElementById("popupWindow").style.display = "none";
}
  