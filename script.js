// script.js - Add interactivity to your GitHub Pages website

// Show a welcome alert when the page loads
window.onload = function () {
  console.log("Page loaded");
  alert("Welcome to my GitHub Page!");
};

// Toggle dark mode when the button is clicked
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  const modeText = document.getElementById("mode-status");
  if (document.body.classList.contains("dark-mode")) {
    modeText.textContent = "Dark mode is ON";
  } else {
    modeText.textContent = "Dark mode is OFF";
  }
}
