/* var minutes;
var seconds;

function startTimer() {
    minutes = 25;
    seconds = 0;

var interval = setInterval(
    function() {
        var timer = document.getElementById("timer");
        if (seconds == 0) {
            minutes = minutes - 1;
            seconds = 59;
            timer.innerHTML = minutes + ":" + seconds;
        } else if (seconds > 0) {
            seconds = seconds - 1;
            timer.innerHTML = minutes + ":" + seconds;
        }


    }, 1000
)} */

//Declaring Variables
let breakLength = 5;
let workLength = 25;

let timerMin = workLength;
let timerSec = 0;

let timerRunning = true;
let workSession = true;

//Functions
function startTimer() {
    let minutes = timerMin;
    let seconds = timerSec;
    setInterval(function() {
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