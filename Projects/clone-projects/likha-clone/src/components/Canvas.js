import React, { useEffect, useRef } from "react";

export default function Canvas(props) {
  const canvasRef = useRef(null);
  const { className } = props;

  const draw = (ctx) => {
    ctx.fillStyle = "rgb(122,123,122)";
    //   context.path();
    // ctx.moveTo(0, 0);
    // ctx.fillRect(50, 50, 100, 100);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    let animationFrameId;
    const render = () => {
      animationFrameId = window.requestAnimationFrame(render);
      draw(context);
    };
    render();
    return () => {
      // clean up function right before component unmount
      window.cancelAnimationFrame(animationFrameId);
    };
  });
  return <canvas className={className} ref={canvasRef}></canvas>;
}

// export function useCanvas(contextType, draw) {
//   //   const { className } = props;
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext(contextType || "2d");
//     let animationFrameId;
//     const render = () => {
//       draw(context);
//       animationFrameId = window.requestAnimationFrame(render);
//       return () => {
//         window.cancelAnimationFrame(animationFrameId);
//       };
//     };
//     render();
//   });
//   return canvasRef;
// }

export function resizeCanvasToDisplaySize(context, canvas) {
  const { width, height } = canvas.getBoundingClientRect();

  //   adjust size according to device pixel ratio
  if (canvas.width !== width || canvas.height !== height) {
    const { devicePixelRatio: ratio = 1 } = window;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    context.scale(ratio, ratio);
    return true; // or return some useful information like width and height
  }
  return false;
}
