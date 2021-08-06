import React, { useEffect, useRef } from "react";

export default function Canvas() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current.getContext("2d");
  });
  return <canvas ref={canvasRef} className="stage"></canvas>;
}
