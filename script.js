// Select the favicon link element
const favicon = document.getElementById("favicon");
const content = document.getElementById("content");

// Function to change favicon and title
function updatePageStatus() {
    if (document.hidden) {
        document.title = "Storage - Google Drive";
        favicon.href = "https://www.computerhope.com/issues/pictures/google-drive-logo.png"; // Inactive icon URL
        content.style.opacity = 0.5;
    } else {
        document.title = "Fridge.site";
        favicon.href = "https://cdn-icons-png.freepik.com/256/17393/17393527.png?semt=ais_hybrid"; // Active icon URL
        content.style.opacity = 1;
    }
}

// Listen for visibility changes
document.addEventListener("visibilitychange", updatePageStatus);
