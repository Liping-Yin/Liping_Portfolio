const musicContainer = document.getElementById("musicContainer");
// get navigation related elements
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");

const audio = document.getElementById("audio");
const conver = document.getElementById("cover");

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
function playSong(song) {
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");
  audio.play();
}
