function checkYourSpeed()
{
    window.location.href = 'checkYourSpeed.html';
}
function toggleTheme() {
var button = document.querySelector('.switch-theme');
var text = document.querySelector('.switch-theme span');
const body = document.body;

// Check if 'dark-theme' class is present
const isDarkTheme = body.classList.contains('dark-theme');
// Toggle the classes based on the current theme
if (isDarkTheme) {
text.style.color = "white";    
button.style.backgroundColor = "black";
body.classList.remove('dark-theme');
body.classList.add('light-theme');
} else {
text.style.color = "black";
button.style.backgroundColor = "white";
body.classList.remove('light-theme');
body.classList.add('dark-theme');
}
}    




