import React, { useEffect, useRef, useState } from "react";
import DatGui, { DatNumber } from "react-dat-gui";

export default function BackgroundAnimation() {
  const canvasRef = useRef(null);
  const [canvasSize, setCanvasSize] = useState({
    width: 400,
    height: 400,
  });
  const [opts, setOpts] = useState({
    y: canvasSize.height / 2,
    length: 0.01,
    amplitude: 100,
    frequency: 0.01,
  });
  const strokeColor = {
    h: 200,
    s: 50,
    l: 50,
  };
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // update canvas size
    window.addEventListener("resize", (e) => {
      e.preventDefault();
      setCanvasSize({
        ...canvasSize,
        width: window.innerWidth,
        height: window.innerHeight,
      });
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    const ctx = canvas.getContext("2d");
    let increment = opts.frequency;
    const animate = () => {
      requestAnimationFrame(animate);
      //   ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);
      ctx.fillStyle = "rgba(122,123,100,0.8)";
      //   ctx.fillRect(0, 0, canvasSize.width, canvasSize.height);
      //   ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);
      for (let i = 0; i < canvas.width; i++) {
        //   Math.sin(increment) is useful to create dynamic changing effect; mathmatics
        ctx.lineTo(
          i,
          opts.y +
            Math.sin(i * opts.length + increment) *
              opts.amplitude *
              Math.sin(increment)
        );
      }
      ctx.strokeStyle = "hsl(0,50%,50%)";
      ctx.stroke();
      increment += opts.frequency;
    };
    animate();
  }, []);

  return (
    <>
      <DatGui data={opts} onUpdate={setOpts} liveUpdate={true}>
        <DatNumber
          path="y"
          label="waveHeight"
          min={0}
          max={canvasSize.height}
        />
        <DatNumber
          path="length"
          label="waveLength"
          min={0}
          max={1}
          step={0.01}
        />
        <DatNumber
          path="amplitude"
          label="Amplitude"
          labelWidth="20%"
          min={0}
          max={100}
          step={1}
        />
        <DatNumber
          path="frequency"
          label="Frequency"
          min={0}
          max={1}
          step={0.01}
        />
      </DatGui>
      <canvas ref={canvasRef} id="bg-canvas"></canvas>;
    </>
  );
}
