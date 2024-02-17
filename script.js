const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const resetBtn = document.querySelector("#resetBtn");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const mlseconds = document.querySelector("#mlseconds")

let timer;

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer() {
  timer = setInterval(updateTime, 10);
  startBtn.setAttribute("disabled", "true");
}

function stopTimer() {
  clearInterval(timer);
  startBtn.removeAttribute("disabled");
}

function resetTimer() {
  stopTimer();
  minutes.textContent = "00";
  seconds.textContent = "00";
  mlseconds.textContent = "00";
}

function updateTime() {
  let sec = Number(seconds.textContent);
  let min = Number(minutes.textContent);
  let mlsec = Number(mlseconds.textContent);

  mlsec++;

  if(mlsec >=100){
    mlsec = 0;
    sec++
  }

  if (sec >= 60) {
    sec = 0;
    min++;
  }

  minutes.textContent = min < 10 ? "0" + min : min;
  seconds.textContent = sec < 10 ? "0" + sec : sec;
  mlseconds.textContent = mlsec < 100 ? mlsec : mlsec;
}





