function search() { //Finds recipes as the user types
    let find = document.getElementById("searchHere").value.toUpperCase();
    let recipeItem = document.querySelectorAll(".recipe");
    let recipeName = document.getElementsByTagName("h2");
    for (var i = 0; i < recipeName.length; i++){
        let result = recipeItem[i].getElementsByTagName("h2")[0];

        if(result){
            let value = result.innerHTML || result.textContent;
            if(value.toUpperCase().indexOf(find) > -1){
                recipeItem[i].style.display="";
            }else{
                recipeItem[i].style.display="none";
            }
        }
    }
}

var seconds = 300;
var countingTime = null;
document.getElementById("timer").innerHTML = "00:05:00";
var originalTimeShown = document.getElementById("timer").innerHTML;
var originalTimeInSeconds = seconds;


/*function countup() {
    seconds++;
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
}*/

function countdown() {
    if (seconds > 0) {
        seconds--;
    } else {
        pauseTimer();
        return;
    }
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
function setTimer() {
    document.getElementById("timer").style.display = "none";
    document.getElementById("timerInput").style.display = "flex";
}
function commitTimer() {
    if (e.keyCode == 13) {
        document.getElementById("timer").style.display = "flex";
        document.getElementById("timerInput").style.display = "none";
    }
    //WIP
}
function startTimer() {
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
    document.getElementById("timer").innerHTML = originalTimeShown;
    seconds = originalTimeInSeconds;
}