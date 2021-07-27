import React from "react";

export default function OverLaySvg(props) {
  return (
    <svg {...props}>
      <defs>
        <linearGradient id="gradient1" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#EAA098"></stop>
          <stop offset="100%" stopColor="#FAF2F0"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}
