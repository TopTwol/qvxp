// Select the favicon link element
const favicon = document.getElementById("favicon");
const content = document.getElementById("content");

// Function to change favicon and title
function updatePageStatus() {
    if (document.hidden) {
        document.title = "Come back soon!";
        favicon.href = "https://www.computerhope.com/issues/pictures/google-drive-logo.png"; // Inactive icon URL
        content.style.opacity = 0.5;
    } else {
        document.title = "Active Page";
        favicon.href = "https://freight.cargo.site/t/original/i/3d32e3b0283084ab1282dff71df44cf92d79ffe3292b371328198ff2e55e3166/unnamed.png"; // Active icon URL
        content.style.opacity = 1;
    }
}

// Listen for visibility changes
document.addEventListener("visibilitychange", updatePageStatus);
