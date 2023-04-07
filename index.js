//Slide in image to the right
window.addEventListener('load', () =>{
    const lakeDiv = document.querySelector('.lake');
    lakeDiv.classList.add('slide-in');
})

//Declare variables for both icon sized images
const instaDiv = document.querySelector('.insta');
const mailDiv = document.querySelector('.mail');

// Set initial opacity to 0
instaDiv.style.opacity = 0;
mailDiv.style.opacity = 0;

// Fade in the icon sized images when the page is loaded
window.addEventListener('load', () => {
    instaDiv.style.transition = 'opacity 3s';
    mailDiv.style.transition = 'opacity 3s';

    instaDiv.style.opacity = 1;
    mailDiv.style.opacity = 1;
});

// Prompt user to allow or block notifications upon arrival on webpage
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




