document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Basic validation (replace with backend validation in real-world scenario)
    if (username === 'admin' && password === 'admin') {
        window.location.href = 'index.html'; // Redirect to the language selection page
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
function openPopup() {
    document.getElementById("popupWindow").style.display = "block";
}

function closePopup() {
    document.getElementById("popupWindow").style.display = "none";
}
