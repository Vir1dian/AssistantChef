let hour, min, sec;
intent('(Set|Have|Start) a timer for $(hr NUMBER) (hour|hours)',
       '(Set|Have|Start) a timer for $(mn NUMBER) (minute|minutes)',
       '(Set|Have|Start) a timer for $(sc NUMBER) (second|seconds)',
       '(Set|Have|Start) a timer for $(hr NUMBER) (hour|hours), $(mn NUMBER) (minute|minutes), and $(sc NUMBER) (second|seconds)',
       '(Set|Have|Start) a timer for $(hr NUMBER) (hour|hours) and $(mn NUMBER) (minute|minutes)',
       '(Set|Have|Start) a timer for $(mn NUMBER) (minute|minutes) and $(sc NUMBER) (second|seconds)',
       '(Set|Have|Start) a timer for $(hr NUMBER) (hour|hours) and $(sc NUMBER) (second|seconds)',
       p => {
    if (p.hr) {
        hour = p.hr.value;
        console.log(hour);
    }
    if (p.mn) {
        min = p.mn.value;
        console.log(min);
    }
    if (p.sc) {
        sec = p.sc.value;
        console.log(sec);
    }
    p.play(`(Ok,|Alright,|Sure,|) (setting|starting) a timer for` + secondsToHMSstring(hour, min, sec));
    p.play({command: 'alanStartTimer', data: timeInSeconds(hour, min, sec)});
    //console.log(p.NUMBER.value);
    hour = min = sec = null; //resets all time values to null to avoid carrying time over to new calls
});
intent('(Pause|Stop) the timer', p => {
    p.play('(Ok,|Alright,|Sure,|) pausing the timer');
    p.play({command: 'alanPauseTimer'});
});
intent('(Resume|Continue|Unpause) the timer', 
       'Start the timer (over|) again',
       p => {
    p.play('(Ok,|Alright,|Sure,|) starting the timer');
    p.play({command: 'alanResumeTimer'});
})
intent('(Reset|Rewind|Restart) the timer', p => {
    p.play('(Ok,|Alright,|Sure,|) resetting the timer');
    p.play({command: 'alanResetTimer'});
    p.play('(The timer is currentl paused,|) Remember to also start the timer again');
});


//Helper functions
function timeInSeconds(h, m, s) { //converts input time of hours, minutes, and seconds into seconds only
    if (h == undefined) {
        h = 0;
    }
    if (m == undefined) {
        m = 0;
    }
    if (s == undefined) {
        s = 0;
    }
    return h*3600 + m*60 + s;
}
function secondsToHMSstring(h, m, s) { //returns a string that divides time into hours, minutes, and seconds
    let time = '';
    if (h === 1) {
        time += h + 'hour ';
    }
    if (h > 1) {
        time += h + 'hours ';
    }
    if (m === 1) {
        time += m + 'minute ';
    }
    if (m > 1) {
        time += m + 'minutes ';
    }
    if (s === 1) {
        time += s + 'second ';
    }
    if (s > 1) {
        time += s + 'seconds ';
    }
    return time;
}

