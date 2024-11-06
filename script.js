// Select the favicon link element
const favicon = document.getElementById("favicon");
const content = document.getElementById("content");

// Function to change favicon and title
function updatePageStatus() {
    if (document.hidden) {
        document.title = "Come back soon!";
        favicon.href = "Google_Drive_icon.png"; // Set favicon to inactive icon
        content.style.opacity = 0.5;
    } else {
        document.title = "Active Page";
        favicon.href = "index-favicon.png"; // Set favicon to active icon
        content.style.opacity = 1;
    }
}

// Listen for visibility changes
document.addEventListener("visibilitychange", updatePageStatus);
