let wakeUpTime = 7;
let noon = 12;
let lunchTime = 12;
let napTime = lunchTime + 2;
let evening = 18;
let partyTime;

// Show current time

function showCurrentTime() {
  // dispplay the time(string) on the page
  let clock = document.getElementById("clock");
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  let meridian = "AM";
  //   set hours
  if (hours >= noon) {
    meridian = "PM";
  }

  if (hours > noon) {
    hours = hours - 12;
  }
  //   set minutes
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  //   set seconds
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  // Put together the string to display time

  let clockTime =
    hours + " : " + minutes + " : " + seconds + " " + meridian + "!";
  clock.innerText = clockTime;
}

// getting the clock to increment on its own and change the messages and pictures respectively

function updateClock() {
  let time = new Date().getHours();
  let messageText;
  let image =
    "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

  let timeEvent = document.getElementById("timeEvent");
  let lolcatImage = document.getElementById("lolcatImage");
  if (time == partyTime) {
    image =
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
    messageText = "Let's party!";
  } else if (time == wakeUpTime) {
    image =
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "Wake up!";
  } else if (time == lunchTime) {
    image =
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "Let's have some lunch!";
  } else if (time == napTime) {
    image =
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "Sleep tight!";
  } else if (time < noon) {
    image =
      "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
    messageText = "Good morning!";
  } else if (time >= evening) {
    image = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
    messageText = "Good evening!";
  } else {
    image =
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
    messageText = "Good afternoon!";
  }

  console.log(messageText);
  timeEvent.innerText = messageText;
  lolcatImage.src = image;
  showCurrentTime();
}
updateClock();

// getttinng the clock to increment once a second
let oneSecond = 1000;
setInterval(updateClock, oneSecond);

// Getting the party time button to work
const partyTimeButton = document.getElementById("partyTimeButton");
function partyEvent() {
  if (partyTime < 0) {
    partyTime = new Date().getHours();
    partyTimeButton.innerText = "Party Over !";
    partyTimeButton.style.backgroundColor = "#0A8DAB";
  } else {
    partyTime = -1;
    partyTimeButton.innerText = "Party Time !";
    partyTimeButton.style.backgroundColor = "#222";
  }
}
partyTimeButton.addEventListener("click", partyEvent);

// activate wake up time selector
let wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

wakeUpTimeSelector.addEventListener("change", (e) => {
  wakeUpTime = wakeUpTimeSelector.value;
  console.log(`wake up time: ${wakeUpTime}`);
});

// activate lunch time selctor
let lunchTimeSelector = document.getElementById("lunchTimeSelector");
lunchTimeSelector.addEventListener("change", (e) => {
  lunchTime = lunchTimeSelector.value;
  console.log(`lunch time:${lunchTime}`);
});

// activate nap time
let napTimeSelector = document.getElementById("napTimeSelector");
napTimeSelector.addEventListener("change", (e) => {
  napTime = napTimeSelector.value;
  console.log(`nap time: ${napTime}`);
});
