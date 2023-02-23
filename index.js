var startButton = document.getElementById("start_button_id");
var timer = document.getElementById("timer_id");
var letter = document.getElementById("letter_id");
var score = document.getElementById("score_id");
var maxscore = document.getElementById("max_score_id");
var TIME_LIMIT = 20;
var Score = 0;
var maxScore = 0
var Reset = false;
var pause = true;
var time_counter;
var randChar;
var t;

document.addEventListener('keydown', (event) => {
    keyName = event.key;
    if (!pause)
        checkChar();
}, false);

function startGame() {
    if (Reset){
        Score = 0;
        Reset = false;
        pause = false;
        score.innerHTML = "امتیاز : "+ Score ;
        letter.innerHTML = "آماده ؟ ";
        time_counter = TIME_LIMIT;
        timer.innerHTML =  "زمان : " + time_counter + " ثانیه "
        startButton.innerHTML = "شروع"
    }
    else{
        startButton.style.opacity = "0.5" ;
        time_counter = TIME_LIMIT;
        timer.innerHTML =  "زمان : " + time_counter + " ثانیه "
        startButton.disabled = true
        pause = false;
        setRandChar();
        clearInterval(t)
        t = setInterval(startTimer, 1000);
    }
}

function startTimer() {
    if (!pause) {
        time_counter -= 1;
        timer.innerHTML =  "زمان : " + time_counter + " ثانیه "
    }
    if (time_counter == 0) {
        clearInterval(t)
        Reset = true;
        pause = true;
        startButton.disabled = false;
        startButton.style.opacity = "1";
        timer.innerHTML = "زمان : " + time_counter + " ثانیه"
        letter.style.color = "black";
        letter.innerHTML = "تموم شد رفیق";
        startButton.innerHTML = "تازه سازی :)";
        if (Score > maxScore)
            maxScore = Score
            maxscore.innerHTML = "بیشترین امتیاز : " + maxScore;
    }
}

function setRandChar() {
    randChar = String.fromCharCode((Math.floor(Math.random() * 25)) + 97);
    letter.innerHTML = randChar;
}

function checkChar() {
    if (keyName == randChar && !pause) {
        Score++;
        score.innerHTML = "امتیاز : "+ Score;
        setRandChar();
        letter.style.color = "black";
    }
    else{
        letter.style.color = "red";
    }
}
