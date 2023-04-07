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