// .................. Tweens ....................

// animation requires: 1 things
// 1). targets: raw object, and array of objects, or selector text
//2). vars: an object with property/value pairs that you are animating to and other optional special properties
gsap.to(".box--a", { duration: 1, opacity: 0.3 });
gsap.to(".box--b", { duration: 2, x: -200 });
gsap.to(".box--c", { duration: 3, x: 100, rotation: 90, scale: 0.5 });

//  from() tweens
gsap.from(".box--a", { duration: 3, x: 100 });

// fromTo(): start values and ending values

gsap.fromTo(
  ".box--b",
  { duration: 2, rotation: 90 },
  { duration: 2, rotation: 180 }
);

// set()： immediately set some properties. essentially a zero duration tween

gsap.set(".box--c", { scale: 1.2 });

// ...............SPECIAL PROPERTIES ............

// Special properties are like reserved keyword that GSAP handles differently than a normal(animated) property
//  callbacks, deplays,easing,staggers and ...

//# ease: controls the rate of change during tween

const boxD = document.querySelector(".box--d");
// gsap.to(boxD, { duration: 2.5, ease: "power2.out", y: -300 });

// CustomEase.create(
//   "hop",
//   "M0,0 C0,0 0.056,0.442 0.175,0.442 0.294,0.442 0.332,0 0.332,0 0.332,0 0.414,1 0.671,1 0.991,1 1,0 1,0"
// );

gsap.to(boxD, { duration: 3, ease: "hop", scale: 0.8 });

//# stagger :  easy to animate a group of objects with a small delay between the start of each object's animation.

gsap.from(".box--s", {
  duration: 2,
  scale: 0.5,
  opacity: 0,
  delay: 0.5,
  stagger: 0.2,
  ease: "elastic",
  force3D: true,
});

document.querySelectorAll(".box--s").forEach(function (box) {
  box.addEventListener("click", function () {
    gsap.to(".box--s", {
      duration: 0.5,
      opacity: 0,
      y: -100,
      stagger: 0.1,
      ease: "back.in",
    });
  });
});

//# callbacks:   invoke a function when a specific animation-related event occurs:
// parameters have to be array
const boxE = document.querySelector(".box--e");
const output = document.querySelector(".output");
gsap.to(boxE, {
  scale: 0.5,
  duration: 2,
  onStart: showMessage,
  onStartParams: ["start"],
  onComplete: showMessage,
  onCompleteParams: ["Done"],
  delay: 1,
});

function showMessage(message) {
  output.innerHTML += message + "</br>";
}

// .............. Timelines.............................
// timeline is a container for tweens where you place it in time(like schedule)

// create a timeline instance
const tl = gsap.timeline();

// the following two lines do the same thing
const tween_1 = gsap.to(".box--b", { duration: 3, scale: 0.6 });
tl.add(tween_1);
tl.to(".box--b", { duration: 3, scale: 0.6 }); //shorter syntax

const animationSuccession = gsap.timeline({
  repeat: 30,
  repeatDelay: 1,
  defaults: { duration: 1 },
});

// method chaining
//position parameter !!!
animationSuccession
  .to(".box--t1", { scale: 0.5 })
  .to(".box--t2", { duration: 2, scale: 0.5 })
  .to(".box--t3", { scale: 0.5 }, "<3");

// timeline control: similar as Tweens control

// Timeline special properties

// repeat
// repeatDelay
// yoyo
// delay
// onComplete

// getters and setters

console.log(tween_1.duration());
tween_1.duration(1); //sets the duration to 2 seconds
console.log(animationSuccession.duration());

//............... Controll Animations...................

// CONTROL TWEENS

// create reference to tween (animation)
let tween = gsap.to(".box--a", { duration: 1, x: 100 });
// pause
tween.pause();
// play
tween.play();

// resume
tween.resume();
// half speed
tween.timeScale(0.5);

// CONTROL TIMELINES

animationSuccession.timeScale(4);

// ..... Getting current values of an element's property
// this.targets()
// .getProperty()

// motion path
// const round = document.querySelector(".box--p");

gsap.set("#myRect", {
  xPercent: -50,
  yPercent: -50,
  transformOrigin: "50% 50%",
});
gsap.to("#myRect", {
  motionPath: {
    path: "#myPath",
    // align: "self",
    autoRotate: true,
  },
  duration: 3,
  ease: "power1.out",
});

gsap.to(".box--p", {
  motion: {
    path: "M0 100 ",
  },
});

// MotionPathHelper.create(round);
