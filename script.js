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
        favicon.href = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2LYMGvjy1nx7VfyfVFA1PlJzEAs7vNz19PQ&s"; // Active icon URL
        content.style.opacity = 1;
    }
}

// Listen for visibility changes
document.addEventListener("visibilitychange", updatePageStatus);
