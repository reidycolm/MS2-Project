var minutes;
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
)

} 