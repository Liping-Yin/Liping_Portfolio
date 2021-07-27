import React, { useRef, useEffect } from "react";

function resizeCanvasToDisplaySize(context, canvas) {
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

// customize a canvas hook to reuse the logic
export const useCanvas = (draw, predraw, postdraw, options = {}) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    //   set canvas after mounting
    const canvas = canvasRef.current;
    const context = canvas.getContext(options.context || "2d");
    let frameCount = 0;
    let animationFrameId;

    const render = () => {
      resizeCanvasToDisplaySize(context, canvas);
      predraw(context, frameCount);
      draw(context, frameCount);
      postdraw(context, canvas);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();
    return () => {
      // clean up function right before component unmount
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return canvasRef;
};

const _postDraw = (context, frameCount) => {
  frameCount++;
  context.restore();
};
const _predraw = (context, canvas) => {
  context.save();
  resizeCanvasToDisplaySize(context, canvas);
  const { width, height } = context.canvas;
  context.clearRect(0, 0, width, height);
};

export default function CustomCanvas(props) {
  const {
    draw,
    predraw = _predraw,
    postdraw = _postDraw,
    options,
    ...rest
  } = props;
  //   const { context, ...moreConfig } = options;
  const canvasRef = useCanvas(draw, predraw, postdraw, options);

  return <canvas ref={canvasRef} {...rest}></canvas>;
}
