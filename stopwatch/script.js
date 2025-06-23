
const playButton = document.getElementsByClassName("Play")[0];
const lapButton = document.getElementsByClassName("lap")[0];
const clearButton = document.getElementsByClassName("laps-clear-button")[0];
const resetButton = document.getElementsByClassName("Reset")[0];
const minute = document.getElementsByClassName("minute")[0];
const second = document.getElementsByClassName("sec")[0];
const centiSecond = document.getElementsByClassName("msec")[0];
const laps = document.getElementsByClassName("laps")[0];
const bg = document.getElementsByClassName("outercircle")[0];
const shadow = document.getElementsByClassName("outercircle")[0];




let isplay = false
let secCounter = 0;
let min;
let sec;
let centiSec;
let centiCounter = 0;
let minCounter = 0;
let lapItem = 0;
let isReset = false;

const toggleButton = () => {
    lapButton.classList.remove("hidden");
    resetButton.classList.remove("hidden");
}

const play = () => {
    if (!isplay && !isReset) {
        playButton.innerHTML = 'Pause';
        bg.classList.add("animation-bg");
        shadow.classList.add("shadow");
        min = setInterval(() => {
            minute.innerHTML = `${++minCounter}:`;
        }, 60*1000);
        sec = setInterval(() => {
            if (secCounter === 60) {
                secCounter = 0;
            }
            second.innerHTML = `&nbsp;${++secCounter}:`;
        }, 1000);
        centiSec = setInterval(() => {
            if (centiCounter === 100) {
                centiCounter = 0;
            }
            centiSecond.innerHTML = `&nbsp;${++centiCounter}`;
        }, 10);
        isplay = true;
        isReset = true;
    } else {
        playButton.innerHTML = 'Play';
        clearInterval(min);
        clearInterval(sec);
        clearInterval(centiSec);
        isplay = false;
        isReset = false;
        bg.classList.remove("animation-bg");
        shadow.classList.remove("shadow");
    }
    toggleButton();
}


const reset = () => {
    isReset = true;
    play();
    lapButton.classList.add("hidden");
    resetButton.classList.add("hidden");
    second.innerHTML = '&nbsp;0:'
    centiSecond.innerHTML = '&nbsp;0';
    minute.innerHTML = '0 :';
}

const lap = () => {
    const li = document.createElement("li");
    const number = document.createElement("span");
    const timestamp = document.createElement("span");

    li.setAttribute("class", "laps-item");
    number.setAttribute("class", "number");
    timestamp.setAttribute("class", "time-stamp");

    number.innerText = `#${++lapItem}`;
    timestamp.innerHTML = `${minCounter} : ${secCounter} : ${centiCounter}`;

    li.append(number, timestamp);
    laps.append(li);

    clearButton.classList.remove("hidden");
}

const clearall = () => {
    laps.innerHTML = '';
    laps.append(clearButton);
    clearButton.classList.add("hidden");
    lapItem = 0;
}
playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
lapButton.addEventListener("click", lap);
clearButton.addEventListener("click", clearall);