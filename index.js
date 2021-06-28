// customize cursor
let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll("a");
let homeIntro = document.querySelector(".home__intro h1");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

navLinks.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("invisible");
  });
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("invisible");
  });
});

homeIntro.addEventListener("mouseover", () => {
  mouseCursor.classList.add("larger");
});
homeIntro.addEventListener("mouseleave", () => {
  mouseCursor.classList.remove("larger");
});
