//Declaring Variables
let breakLength = 5;
let workLength = 25;

let timerMin = workLength;
let timerSec = 0;

let timerRunning = true;
let workSession = true;

let interval;

//Functions
function startTimer() {
    let minutes = timerMin;
    let seconds = timerSec;
    interval = setInterval(function() {
        if (seconds > 0) {
            seconds--;
            if (seconds < 10) {
                $("#seconds").text("0"+sec)
            } else {
                $("#seconds").text(seconds)
            }
        } else {
            minutes--;
            seconds = 59;
            $("#seconds").text(seconds);
            $("#minutes").text(minutes);
        }

    }, 1000)
}

function pauseTimer() {
    clearInterval(interval);
    timerMin = parseInt($("#minutes").text());
    timerSec = parseInt($("#seconds").text());
}

function resetTimer() {
    timerMin = workLength;
    timerSec = 0;
    $("#minutes").text(timerMin);
    $("#seconds").text("00");
}