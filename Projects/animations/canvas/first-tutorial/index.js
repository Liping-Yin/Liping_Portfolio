"use strict";
// var body = document.getElementsByTagName("body")[0];
const canvas = document.getElementById("myCanvas");
let ctx;
// checking for browser support
window.addEventListener("load", draw);

function draw() {
  console.log("draw");
  if (canvas.getContext) {
    ctx = canvas.getContext("2d");
    //   drawing codes

    ctx.fillStyle = "rgba(0,0,200,.5)";

    // DRAW RECTANGLE
    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(50, 50, 50, 50);
    ctx.strokeRect(55, 55, 40, 40);

    // DRAW BY PATHS
    ctx.beginPath(); //path is created
    ctx.moveTo(200, 200); // move the pen to spot (x,y)
    ctx.lineTo(225, 175);
    ctx.lineTo(225, 220);
    ctx.fill();
  } else {
    // fallback content: canvas-unspported code
    canvas.innerText = "a clock";
  }
}
