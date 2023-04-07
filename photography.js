//Function is called when the user submits their answer
function getSubmission() {
    // Get the user's answer input element
    const userInput = document.getElementById('answer');

    // Check if the input contains only letters and spaces
    if (/^[a-zA-Z\s]+$/.test(userInput.value)) {
        // Set the background color of the input field to light green
        userInput.style.backgroundColor = "lightgreen";

        // Get the result message and set it to a 'thank you' message
        const resultMessage = document.getElementById('result-message');
        resultMessage.innerHTML = 'Thank you for your submission!';

        // Set the input field to read-only so that it can't be changed by the user
        userInput.readOnly = true;
    } else {
        // Set the background color of the input field to red
        userInput.style.backgroundColor = "red";

        // Get the result message and set it to an error message
        const resultMessage = document.getElementById('result-message');
        resultMessage.innerHTML = 'You cannot enter numbers!';

        // Set the input field to read-only so that it can't be changed by the user
        userInput.readOnly = true;
    }
}

// Function is called when the user clicks the reset button
function reset() {
    //Get the user's input answer input element
    const userInput = document.getElementById('answer');

    //Background color is reset to white
    userInput.style.backgroundColor = "white";

    //Input field is set to blank
    userInput.value = " ";

    //Set the result message to be blank
    const resultMessage = document.getElementById('result-message');
    resultMessage.innerHTML = " ";

    userInput.readOnly= false;
}

// Recieve the submit and reset button
const submitButton = document.getElementById('submit-button');
const resetButton = document.getElementById('reset-button');

// Adding event listeners so that the functions are activated when the buttons are clicked on
submitButton.addEventListener("click", getSubmission);
resetButton.addEventListener("click", reset);

window.addEventListener('load', () => {
    // Check if the browser supports notifications
    if ('Notification' in window) {
        // Request permission to display notifications
        Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
                // Create a new notification
                new Notification('Welcome to my website!', {
                    body: 'Thanks for visiting!',
                    icon: 'path/to/notification-icon.png'
                });
            }
        });
    }
});

// Creating variables that hold the selector of each button
const blueButton = document.querySelector('#blue');
const redButton = document.querySelector('#red');
const purpleButton = document.querySelector('#purple');

//When each button is clicked on, the below properties will change
blueButton.addEventListener('click', () => {
    document.documentElement.style.setProperty('--first-color', '#253237');
    document.documentElement.style.setProperty('--second-color', '#C2DFE3');
    document.documentElement.style.setProperty('--third-color', '#9DB4C0');
    document.documentElement.style.setProperty('--fourth-color', 'black');
    document.documentElement.style.setProperty('--fifth-color', 'whitesmoke');
});

redButton.addEventListener('click', () => {
    document.documentElement.style.setProperty('--first-color', 'rgb(133, 0, 0)');
    document.documentElement.style.setProperty('--second-color', '#FA7070');
    document.documentElement.style.setProperty('--third-color', 'indianred');
    document.documentElement.style.setProperty('--fourth-color', 'black');
    document.documentElement.style.setProperty('--fifth-color', 'whitesmoke');
});

purpleButton.addEventListener('click', () => {
    document.documentElement.style.setProperty('--first-color', '#3A1078');
    document.documentElement.style.setProperty('--second-color', '#865DFF');
    document.documentElement.style.setProperty('--third-color', '#4E31AA');
    document.documentElement.style.setProperty('--fourth-color', 'black');
    document.documentElement.style.setProperty('--fifth-color', 'whitesmoke');
});