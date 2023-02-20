var keyName;
var keyCode;
var randChar;
var score = 0;
var seconds= 00;
var mSeconds= 00;
var Score = document.getElementById('score');
var test = document.getElementById('test');
var letter = document.getElementById('letter');
var MiliSeconds = document.getElementById("mili_seconds")
var Seconds = document.getElementById("seconds")
var buttonStart = document.getElementById('button-start');
var buttonReset = document.getElementById('button-reset');
var timer;

document.addEventListener('keydown', (event) => {
  keyName = event.key;
  keyCode = event.code;
  checkChar();
}, false);

buttonStart.onclick = function(){
  startGame();
  // alert("start game shod");
}
buttonReset.onclick = function(){
  alert("click shod reset")
  reset();
}
function reset(){
  Score.innerHTML = 0;
  Seconds.innerHTML= 00;
  MiliSeconds.innerHTML= 00;
}

function startGame(){
  // alert("ghabl az changerdnchar")
  changeRndChar()
  // alert("bad az changerdnchar")
  clearInterval(timer);
  timer = setInterval(startTimer, 10);
}

function changeRndChar(){
  randChar = String.fromCharCode((Math.floor(Math.random() * 25))+97);
  letter.innerHTML =randChar;
}



function startTimer(){
  mSeconds++; 
  if(mSeconds <= 9){
    MiliSeconds.innerHTML = "0" + mSeconds;
  }
  if (mSeconds > 9){
    MiliSeconds.innerHTML = mSeconds
    } 
      
  if (mSeconds > 99) {
    console.log("seconds");
    seconds++;
    Seconds.innerHTML = "0" + seconds;
    mSeconds = 0;
    MiliSeconds.innerHTML = "0" + 0;
    }
  if (seconds == 10){
    letter.innerHTML="تموم شد!";
    mSeconds = "00";
    seconds = "10";
    MiliSeconds.innerHTML = mSeconds;
    Seconds.innerHTML = seconds;
    alert("هه هه ! زمانت تموم شد :).")
    clearInterval(timer);
    }  
}

function checkChar(){
  if (keyName===randChar){
    changeRndChar();
    score++;
    console.log(score);
    Score.innerHTML = score;
  }
}