const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const year = document.getElementById('new_year');

const title = document.getElementById('title');
const countdown = document.getElementById('countdown');
const loading = document.getElementById('loading');

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// set background year
year.innerText = currentYear;

// update countdown time
function updateCountdown() {
    const currentTime = new Date();
    const timeDiff = newYearTime - currentTime;

    const day = Math.floor(timeDiff / 1000 / 60 / 60 / 24);
    const hr = Math.floor(timeDiff / 1000 / 60 / 60) % 24;
    const min = Math.floor(timeDiff / 1000 / 60) % 60;
    const sec = Math.floor(timeDiff / 1000) % 60;

    // add value to DOM
    days.innerText = day;
    hours.innerText = doubled(hr);
    minutes.innerText = doubled(min);
    seconds.innerText = doubled(sec);

    if (
        days.innerText == 0 &&
        hours.innerText == 0 &&
        minutes.innerText == 0 &&
        seconds.innerText == 0
    ) {
        reset();
    }

    function reset() {
        clearInterval(countInterval);
        countdown.innerText = "";
        title.innerText = "Welcome To 2022";
        title.style.margin = "0";
        year.innerText = "";
    }

    // add 0 if number is less than 10
    function doubled(i) {
        if (i < 10) {
            return `0${i}`;
        } else {
            return i;
        }
    }
}

// show spinner before countdown timer
setTimeout(() => {
    loading.remove()
    countdown.style.display = 'flex';
}, 1000);

// run every second
let countInterval = setInterval(() => {
    updateCountdown();
}, 1000);