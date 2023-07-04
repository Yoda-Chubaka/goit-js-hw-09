const CHANGE_COLOR_DELAY = 1000;
let idInt = null;

const refs = {
    startButton: document.querySelector('button[data-start]'),
    stopButton: document.querySelector('button[data-stop]'),
    body: document.querySelector('body'),
}

refs.stopButton.disabled = true;
refs.startButton.addEventListener('click', onBtnStartChangeColor);
refs.stopButton.addEventListener('click', onBtnStopChangeColor);

function onBtnStartChangeColor() {
    refs.startButton.disabled = true;
    refs.stopButton.disabled = false;

    idInt = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor()
    }, CHANGE_COLOR_DELAY);
}

function onBtnStopChangeColor() {
    refs.startButton.disabled = false;
    refs.stopButton.disabled = true;

    clearInterval(idInt);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}