import React, { useEffect, useRef } from "react";
import Canvas from "./Canvas";
import { Link } from "react-router-dom";
import { ArrowDownSvg } from "../assets/IconsSvg";

export default function HomeHero() {
  const heroTiltRef = useRef();

  useEffect(() => {
    const heroTilt = heroTiltRef.current;

    const tilt = (event) => {
      let rectX = heroTilt.offsetWidth;
      let rectY = heroTilt.offsetHeight;
      let yAxis = (rectX / 2 - event.pageX) / 100;
      let xAxis = (rectY / 2 - event.pageY) / 30;

      heroTilt.style.transform = ` rotateX(${xAxis}deg) rotateY(${yAxis}deg) scale3d(1,1,1) `;
      heroTilt.style.willChange = "transform";

      heroTilt.children[3].style.transform = `translate(${yAxis}px,${xAxis}px)`;
      heroTilt.children[4].style.transform = `translate(${yAxis}px,${xAxis}px)`;
    };
    heroTilt.addEventListener("mousemove", tilt);

    return () => {
      heroTilt.removeEventListener("mousemove", tilt);
      heroTilt.style.willChange = "none";
    };
  });

  return (
    <div className="home__hero">
      <div className="home__hero__tilt" ref={heroTiltRef}>
        <a
          href="/about/winner-of-aesthetic-clinic-of-the-year-2020-2021/"
          className="link home__hero__award"
        >
          <img
            src="https://likhaaesthetic.ie/wp-content/uploads/2021/02/award.svg"
            alt="{Aesthetic Clinic Of The Year}"
          />
        </a>
        <a
          href="/about/ecams-certified/"
          className="link home__hero__award to-animate anim"
        >
          <img
            src="https://likhaaesthetic.ie/wp-content/uploads/2021/02/award-ecams.svg"
            alt="{ECAMS Certified}"
          />
        </a>
        <div className="home__hero__image">
          <Link to="/treatments"></Link>
          <img
            src="https://likhaaesthetic.ie/wp-content/uploads/2021/02/home-hero.png"
            alt="women profile"
          />
          <Canvas className="canvas canvas--blob" />
        </div>
        <h1 className="home__hero__title">
          Beauty <br></br>is a right
        </h1>
        <h1 className="home__hero__title">
          Not<br></br>a Privilege
        </h1>
      </div>
      <button type="button" className="home__hero__arrow link">
        <ArrowDownSvg />
      </button>
      <svg className="clippath" viewBox="0 0 613 613" width="0" height="0">
        <clipPath id="maskShape" clipPathUnits="objectBoundingBox">
          <path d="M0.975,0.361 C1,0.447,1,0.538,0.985,0.625 C0.98,0.643,0.975,0.66,0.967,0.676 C0.953,0.704,0.927,0.723,0.899,0.735 C0.824,0.768,0.73,0.774,0.686,0.848 C0.644,0.92,0.603,1,0.505,0.999 C0.487,0.998,0.468,0.997,0.449,0.994 C0.192,0.957,-0.036,0.727,0.005,0.463 C0.039,0.241,0.203,0.02,0.438,0.002 C0.655,-0.017,0.874,0.129,0.962,0.326 C0.967,0.337,0.971,0.349,0.975,0.361"></path>
        </clipPath>
      </svg>
    </div>
  );
}
