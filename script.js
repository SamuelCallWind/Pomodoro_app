let addMinute = document.querySelector('.buttonPlus');
let deduceMinute = document.querySelector('.buttonMinus');
let timerScreen = document.querySelector('.timer');
let resetButton = document.querySelector('.reset');
let startButton = document.querySelector('.buttonOne');
let pauseButton = document.querySelector('.buttonTwo');

function timeChange(numberOfMinutes) {
    let timerContent = timerScreen.innerHTML.split(':').map(content => Number(content));
    timerContent[0] += numberOfMinutes;
    if (timerContent[0] > 60){
        timerContent = 60;
    } 
    else if (timerContent[0] <= 0) {
        timerContent = 0;
    }
    timerScreen.innerHTML = timerContent.map(part => part.toString().padStart(2, '0')).join(':');
    }

function countdown(){
    let timerContent = timerScreen.innerHTML.split(':').map(content => Number(content));
    let timerSeconds = timerContent[0] * 60 + timerContent[1];
    countInterval = setInterval(() => {
        if (timerContent[0] === 0 && timerContent[1] === 0) {
            document.getElementById('alert').play();
            clearInterval(countdownInterval);
        } else if (timerContent[1] === 0 && timerContent[0] >= 1) {
            timerContent[0] -= 1;
            timerContent[1] = 59;
        } else {
            timerContent[1] -= 1;
        }
        timerScreen.innerHTML = timerContent.map(part => part.toString().padStart(2, '0')).join(':');
    }, 1000);
}

addMinute.addEventListener('click', () => timeChange(1));
deduceMinute.addEventListener('click', () => timeChange(-1));
resetButton.addEventListener('click', () => {
    document.getElementById('alert').play();
    clearInterval(countInterval);
    timerScreen.innerHTML = "25:00"});
startButton.addEventListener('click', () => countdown());
pauseButton.addEventListener('click', () => clearInterval(countInterval));