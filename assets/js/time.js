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

//Functions
function startTimer() {
    let minutes = timerMin;
    let seconds = timerSec;
    timerRunning = true;
    disableControl();
    interval = setInterval(function() {
        if (seconds > 0) {
            seconds--;
            if (seconds < 10) {
                $("#seconds").text("0"+seconds)
            } else {
                $("#seconds").text(seconds)
            }
        } else {
            minutes--;
            seconds = 59;
            $("#seconds").text(seconds);
            $("#minutes").text(minutes);
        }

        if (minutes === 0 && seconds === 00) {
            if (workSession) {
                workSession = false;
                minutes = breakLength;
                seconds = 0
                $("#session-status").text("Enjoy the break!")
                sessionDone();
            } else {
                workSession = true;
                minutes = workLength;
                seconds = 0;
                $("#session-status").text("Focus!")
            }
        }

    }, 10)
}

function pauseTimer() {
    clearInterval(interval);
    timerMin = parseInt($("#minutes").text());
    timerSec = parseInt($("#seconds").text());
    timerRunning = false;
    $(".stop").removeClass("disableControls");
}

function resetTimer() {
    timerMin = workLength;
    timerSec = 0;
    timerRunning = false;
    $("#minutes").text(timerMin);
    $("#seconds").text("00");
    $("#session-status").text("Focus!")
}

function disableControl() {
     $(".stop").addClass("disableControls");
}

function sessionDone() {
    i++;
    $("#work-completed").text(i);
}

// jQuery Event Methods

$(document).ready(function(){
    $("#less-break").click(function() {
        if (!timerRunning) {
            input = parseInt($("#break-duration").text());
            if (input > 1) {
                input--
            }
            breakLength = input;
            $("#break-duration").text(input);
        }
    })

        $("#more-break").click(function() {
        if (!timerRunning) {
            input = parseInt($("#break-duration").text());
            if (input <= 29) {
                input++
            }
            breakLength = input;
            $("#break-duration").text(input);
        }
    })

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
        })

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
        })

        $('input[type="checkbox"]').click(function(){
            if($(this).is(":checked")){
                $("body").css("background-color", "snow");
                $("#timer, .icons, #work-duration, #break-duration").css("color", "black");
            }
            else if($(this).is(":not(:checked)")){
                $("body").css("background-color", "#1E2140");
                $("#timer, .icons, #work-duration, #break-duration").css("color", "snow");
            }
        });
})