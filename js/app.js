const timer = document.getElementById("timer");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let timeLeft = 1500
let interval;
let breaktime = 1; //the intention of this is to start a 5min timer AFTER the 25 min timer
let barrier = 0; //this literally only exits bsc if you spam the start button it increases the amount the time left is decreased per click and idk how to fix it

// i set these up bsc I decided that inverted the colors on break time is just a cool idea :)
const body = document.body;
const container = document.querySelector(".container");


const shorttimer = () => {
  clearInterval(interval);
  timeLeft = 300
  updateTimer();
  alert("breaktime!");
  body.style.background = "linear-gradient(-135deg, #E58EE6CC, #E58EE6CC)";
  container.style.backgroundColor = "#232425FF";

}
const longtimer = () => {
  clearInterval(interval);
  timeLeft = 1500
  updateTimer();alert("GRIND TIME BABYYYY!");
  body.style.background = "linear-gradient(-135deg, #3A3C41FF, #232425FF)";
  container.style.backgroundColor = "#E58EE6CC";
}

const blocker = () => {
  alert("stop pressing the timer twice! it makes the timer run faster and idk how to fix it ;-;");
  resetTimer();
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
      if (breaktime === 0 ) {
        barrier = 0
        breaktime = 2
        longtimer();
      }
      else {
        barrier = 0
        breaktime = 0
        shorttimer();
      }
    }
  }, 1000);
};

const stopTimer = () => {
  clearInterval(interval);
  barrier = 0
};
const resetTimer = () => {
  if (breaktime === 2 || breaktime === 1) { //this line is a little reduncent cause if (breaktime > 0) would work just fine
    barrier = 0;
    breaktime = 2;
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
  } else {
    barrier = 0;
    breaktime = 0;
    clearInterval(interval);
    timeLeft = 300;
    updateTimer();
  }
}


start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click",resetTimer);

// ngl, making that barrier was difficult, in application its simple but
//what I realized with variables like this the more you rely on them
//the more debugging you have to do
//like whne I added the time switching I had to change how my barrier
//varible acted in response.
//while my variable usage did work in this attempt its not scalealbe
//I need to find out how I can find inbuilt elements or keywords that do what I want that way I don't need vairables.

//im a fucking moron why did I assign 1 and 2 to long timer I just needed one litearlly no other function
//then reset timer reconizes long timer as 2 why am I makign this more complex, yk what its 11:50pm i have work tmr
//it works idc
