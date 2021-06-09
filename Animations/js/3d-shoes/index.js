// Movement animation
const card = document.querySelector(".card");
const container = document.querySelector(".container");

const sneaker = document.querySelector(".sneaker img");
const title = document.querySelector(".title");
const description = document.querySelector(".description");
const sizes = document.querySelector(".sizes");
const purchase = document.querySelector(".purchase button");

// Moving Animation Event
container.addEventListener("mousemove", (e) => {
  //   console.log(e.pageX,e.pageY);
  let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 10;

  card.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg) `;
});

// event listener on container is for buff area

// Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //   popout
  title.style.transform = "translateZ(150px)";
  description.style.transform = "translateZ(125px)";
  sneaker.style.transform = "translateZ(150px) rotateZ(-45deg)";
  sizes.style.transform = "translateZ(100px)";
  purchase.style.transform = "translateZ(75px)";
});
// Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateY(0deg)`;

  //   Popout
  title.style.transform = "translateZ(0px)";
  description.style.transform = "translateZ(0px)";
  sneaker.style.transform = "translateZ(0px)rotateZ(0deg)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});
