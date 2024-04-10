// Define a function to reload the page
function reloadPage() {
    // Reload the current page
    location.reload();
}

// Get the "Reload" button element using its tag name
const reloadButton = document.querySelector('button');

// Add a click event listener to the "Reload" button
reloadButton.addEventListener('click', reloadPage);
