// Console log for testing
console.log("Comments page loaded");

// Example of form validation
document.querySelector('form').addEventListener('submit', (event) => {
    const name = document.querySelector('#name').value.trim();
    const comment = document.querySelector('#comment').value.trim();

    if (!name || !comment) {
        event.preventDefault();
        alert("Please fill in all fields before submitting.");
    }
});
