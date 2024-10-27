// Add event listener to form submission
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    // Send form data to server or perform other actions
});