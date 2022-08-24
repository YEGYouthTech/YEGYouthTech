const daysDisplay = document.querySelector(".days");
const hoursDisplay = document.querySelector(".hours");
const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");

const endTime = new Date("Sept 26, 2022 00:00:00").getTime();

let timeLeft;

let countdown = setInterval(() => {
    const currentTime = new Date().getTime();

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    daysDisplay.setAttribute("style", `--value:${days}`);
    hoursDisplay.setAttribute("style", `--value:${hours}`);
    minutesDisplay.setAttribute("style", `--value:${minutes}`);
    secondsDisplay.setAttribute("style", `--value:${seconds}`);
    
    timeLeft = endTime - currentTime;

    if (timeLeft <= 1) {
        clearInterval(countdown);
    }
}, 1000);