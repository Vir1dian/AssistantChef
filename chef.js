var seconds = 300;
var countingTime = null;
secondsToHMS();
var originalTimeInSeconds = seconds;


/*function countup() {
    seconds++;
    secondsToHMS();
}*/
function secondsToHMS() {
    let hrs = Math.floor(seconds/3600);
    if (hrs/10 < 1) {
        hrs = "0" + hrs;
    }
    let mins = Math.floor(seconds/60) % 60;
    if (mins/10 < 1) {
        mins = "0" + mins;
    }
    let secs = seconds % 60;
    if (secs/10 < 1) {
        secs = "0" + secs;
    }
    document.getElementById("timer").innerHTML = hrs + ":" + mins + ":" + secs;
}
function countdown() {
    if (seconds > 0) {
        seconds--;
    } else {
        pauseTimer();
        return;
    }
    secondsToHMS();
}
function setTimer() {
    document.getElementById("timer").style.display = "none";
    document.getElementById("timerInput").style.display = "flex";
}
function commitTimer() {
    let jssetTime = document.getElementById("timerInput");
    jssetTime.addEventListener("keydown", (e) => {
        if (e.key == "Enter"){
            seconds = jssetTime.value;
            originalTimeInSeconds = seconds;
            secondsToHMS();
            document.getElementById("timer").style.display = "flex";
            document.getElementById("timerInput").style.display = "none";
        }
    });
}
function startTimer() {
    document.getElementById("timer").style.display = "flex";
    document.getElementById("timerInput").style.display = "none";
    if (countingTime) {
        return;
    }
    countingTime = setInterval(countdown, 1000);
}
function pauseTimer() {
    clearInterval(countingTime);
    countingTime = null;
}
function resetTimer() {
    clearInterval(countingTime);
    countingTime = null;
    seconds = originalTimeInSeconds;
    secondsToHMS();
}