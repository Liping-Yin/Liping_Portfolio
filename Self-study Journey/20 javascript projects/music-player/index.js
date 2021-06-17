const musicContainer = document.getElementById("musicContainer");
// get navigation related elements
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");

const audio = document.getElementById("audio");
const conver = document.getElementById("cover");

// ???
// 1.difference between querySelector and getElementById in this case
// 2.why there is an id of currTime which in html file doesn't have
const currTime = document.querySelector("#currTime");
const durTime = document.querySelector("#durTime");

// get info related elements
const title = document.getElementById("tite");
const progressContainer = document.getElementById("progressContainer");
const progress = document.getElementById("progress");

// Create Song Titles
const songs = ["hey", "summer", "ukulele"];

// keep track of song
let songIndex = 2;
// Initially load song details into DOM
loadSong(songs[songIndex]);

// update song details
function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  conver.src = `images/${song}.jpg`;
}

// Play Song
function playSong() {
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");
  audio.play();
}

// Play previous song
function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// Play next song
function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}
// Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}

// get duration & currentTime for Time of song

// ??? when to use var,let,const

function DurTime(e) {
  const { duration, currentTime } = e.srcElement;

  var sec;
  var sec_d;

  // define minutes of currentTime
  let minutes = currentTime == null ? 0 : Math.floor(currentTime / 60);
  minutes = minutes < 10 ? "0" + minutes : minutes;

  // define seconds of currentTime
  function get_sec(x) {
    if (Math.floor(x) >= 60) {
      for (var i = 1; i <= 60; i++) {
        if (Math.floor(x) >= 60 * i && Math.floor(x) < 60 * (i + 1)) {
          sec = Math.floor(x) - 60 * i;
          sec = sec < 10 ? "0" + sec : sec;
        }
      }
    } else {
      sec = Math.floor(x);
      sec = sec < 10 ? "0" + sec : sec;
    }
  }
  get_sec(currentTime, sec);

  // change currentTime DOM
  currTime.innerHTML = minutes + ":" + sec;

  // define minutes duration
  let minute_d = isNaN(duration) === true ? "0" : Math.floor(duration / 60);
  minute_d = minute_d < 10 ? "0" + minute_d : minute_d;

  function get_sec_d(x) {
    if (Math.floor(x) >= 60) {
      for (var i = 1; i <= 60; i++) {
        if (Math.floor(x) >= 60 * i && Math.floor(x) < 60 * (i + 1)) {
          sec_d = Math.floor(x) - 60 * i;
          sec_d = sec_d < 10 ? "0" + sec_d : sec_d;
        }
      }
    } else {
      sec_d = sec_d = isNaN(duration) === true ? "0" : Math.floor(x);
      sec_d = sec_d < 10 ? "0" + sec_d : sec_d;
    }
  }
  // define seconds durtion
  get_sec_d(duration);
  // change duration DOM
  durTime.innerHTML = minute_d + ":" + sec_d;
}
// Event listeners
playBtn.addListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// change song
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
// Time/song update
audio.addEventListener("timeupdate", updateProgress);
// click on progress bar
progressContainer.addEventListener("click", setProgress);
// Song ends
audio.addEventListener("ended", nextSong);
// Time of song
audio.addEventListener("timeupdated", DurTime);
