//Declaring Variables
let breakLength = 5;
let workLength = 25;

let timerMin = workLength;
let timerSec = 0;

let timerRunning;
let workSession = true;

let interval;
let input;

let i = 0;

let breakSound = document.getElementById("bells");
let workSound = document.getElementById("gong");

// Timer Function
function startTimer() {
    let minutes = timerMin;
    let seconds = timerSec;
    timerRunning = true;
    disableControl();
    interval = setInterval(function () {
        if (seconds > 0) {
            seconds--;
            if (seconds < 10) {
                $("#seconds").text("0" + seconds);
            } else {
                $("#seconds").text(seconds);
            }
        } else {
            minutes--;
            seconds = 59;
            $("#seconds").text(seconds);
            $("#minutes").text(minutes);
        }

        if (minutes === 0 && seconds === 0) {
            if (workSession) {
                workSession = false;
                minutes = breakLength;
                seconds = 0;
                $("#session-status").text("Enjoy the break!");
                sessionDone();
                breakSound.play();
            } else {
                workSession = true;
                minutes = workLength;
                seconds = 0;
                $("#session-status").text("Focus!");
                workSound.play();
            }
        }

    }, 1000);
}

// Pause Timer Function
function pauseTimer() {
    clearInterval(interval);
    timerMin = parseInt($("#minutes").text());
    timerSec = parseInt($("#seconds").text());
    timerRunning = false;
    $(".stop").removeClass("disableControls");
}

// Reset Timer Function
function resetTimer() {
    timerMin = workLength;
    timerSec = 0;
    timerRunning = false;
    $("#minutes").text(timerMin);
    $("#seconds").text("00");
    $("#session-status").text("Focus!");
}

// Disables Controls When Timer Is Running
function disableControl() {
    $(".stop").addClass("disableControls");
}

// Increases Session Count
function sessionDone() {
    i++;
    $("#work-completed").text(i);
}

// jQuery Event Methods

$(document).ready(function () {

    // Decrease Break Length
    $("#less-break").click(function () {
        if (!timerRunning) {
            input = parseInt($("#break-duration").text());
            if (input > 1) {
                input--;
            }
            breakLength = input;
            $("#break-duration").text(input);
        }
    });

    // Increase Break Length    
    $("#more-break").click(function () {
        if (!timerRunning) {
            input = parseInt($("#break-duration").text());
            if (input <= 29) {
                input++;
            }
            breakLength = input;
            $("#break-duration").text(input);
        }
    });

    // Decrease Work Length
    $("#less-work").click(function () {
        if (!timerRunning) {
            input = parseInt($("#work-duration").text());
            if (input > 5) {
                input--;
            }
            $("#work-duration").text(input);
            $("#minutes").text(input);
            workLength = input;
            resetTimer();
        }
    });

    // Increase Break Length
    $("#more-work").click(function () {
        if (!timerRunning) {
            input = parseInt($("#work-duration").text());
            if (input < 60) {
                input++;
            }
            $("#work-duration").text(input);
            $("#minutes").text(input);
            workLength = input;
            resetTimer();
        }
    });

    // Dark/Light Theme Toggle
    $('input[type="checkbox"]').click(function () {
        if ($(this).is(":checked")) {
            $("body").css("background-color", "snow");
            $("#timer, .icons, #work-duration, #break-duration").css("color", "black");
        }
        else if ($(this).is(":not(:checked)")) {
            $("body").css("background-color", "#1E2140");
            $("#timer, .icons, #work-duration, #break-duration").css("color", "snow");
        }
    });

    // Timer Controls
    $("#play").click(startTimer);

    $("#pause").click(pauseTimer);

    $("#reset").click(resetTimer);
});