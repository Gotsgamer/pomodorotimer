const timer = document.getElementById("timer");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let timeLeft = 1500
let interval;
let breaktime = 0;
let barrier = 0;

const blocker = () => {
  alert("stop pressing the timer twice! it makes the timer run faster and idk how to fix it ;-;");
  clearInterval(interval);
  timeLeft = 1500
  updateTimer();
  barrier = 0;
}

const updateTimer = () => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  timer.innerHTML =
    `${minutes.toString().padStart(2, "0")}
        :
        ${seconds.toString().padStart(2, "0")}`;
};

const startTimer = () => {
  barrier ++;
  if (barrier > 1 ) {
    blocker();
  }
  else interval = setInterval(() =>{
  timeLeft --;
  updateTimer();

  if (timeLeft === 0) {
    alert("Times is up my mans!");
    timeLeft = 1500;
    updateTimer();
  }
  }, 1000);
};

const stopTimer = () => {
  clearInterval(interval);
  barrier = 0
};

const resetTimer = () => {
  clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
    barrier = 0
  }


start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click",resetTimer);
