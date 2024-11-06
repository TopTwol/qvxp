// Adjust paths to include "qvxp/"
function updatePageStatus() {
    if (document.hidden) {
        document.title = "Come back soon!";
        favicon.href = "qvxp/Google_Drive_icon.png"; // Updated inactive icon path
        content.style.opacity = 0.5;
    } else {
        document.title = "Active Page";
        favicon.href = "qvxp/index-favicon.png"; // Updated active icon path
        content.style.opacity = 1;
    }
}
