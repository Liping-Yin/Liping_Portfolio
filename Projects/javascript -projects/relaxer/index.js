const container = document.getElementById("container");
const text = document.getElementById("text");

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

// use higher-order functions

breathAnimation();
function breathAnimation() {
  text.innerText = "Breathe In !";
  //   container.classList.add("grow");

  //   using className so don't need to add or remove over and over through classList

  container.className = "container grow";

  setTimeout(() => {
    text.innerText = "Hold";
    setTimeout(() => {
      text.innerText = "Breathe Out !";
      container.className = "container shrink";
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);
