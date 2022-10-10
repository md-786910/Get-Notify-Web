const text = document.getElementById("text");
const save = document.getElementById("save");
const hideBtn = document.getElementById("hideBtn");
const models = document.querySelector(".models");
const timer = document.getElementById("timer");
const timeText = document.getElementById("time");
// handle text

let music = new Audio("/ring.mp3");

let txt = "";
const handleText = (e) => {
  txt = e.target.value;
};

models.classList.add("hide");
timer.classList.add("hide");
// set setNotify

// hide models
const hideModel = () => {
  music.pause();
  models.classList.remove("active");
  models.classList.add("hide");
};

// show models
const showModels = () => {
  music.play();
  music.loop(true);
  models.classList.remove("hide");
  models.classList.add("active");
};

// setNotify
const setNotify = (time) => {
  if (time) {
    alert("time set successfully ");

    timer.classList.remove("hide");
    timer.classList.add("active");
    const second = time * 3600;
    timeText.innerHTML = `${second} second`;

    setInterval(() => {
      showModels();
    }, second * 1000);
  } else {
    alert("no time specified");
  }
};

const btnClick = () => {
  if (!isNaN(txt)) {
    setNotify(txt);

    text.value = "";
  } else {
    alert("Please enter valid number");
  }
};

text.addEventListener("change", handleText);
save.addEventListener("click", btnClick);
hideBtn.addEventListener("click", hideModel);
