import React, { useEffect, useRef } from "react";
import anime from "animejs";

export default function Navigation() {
  return (
    <div className="nav">
      <Menu />
    </div>
  );
}

export function OverLay(props) {
  const overLayRef = useRef(null);
  // if more componenet share this properties, useContext

  const { menuOpen } = props;
  useEffect(() => {
    let overLay = overLayRef.current;
    const animation = anime({
      targets: overLay,
      d: [
        {
          value:
            "M0 401.5V0H1439.5V483.5C1439.5 483.5 1437.69 336 1268 336C1115.5 336 1174.5 540.5 1039 540.5C870.5 540.5 955 401.5 822 401.5C689 401.5 761 697.5 554 697.5C305 697.5 409.765 495.491 232 483.5C89.7881 473.907 150.5 379 0 401.5Z",
        },
        { value: "M0 1023.5V0H1439.5V1023.5H1316H1081H824.5H540H264.5H0Z" },
      ],
      // fill:"#F19F8B",
      easing: "easeInOutQuint",
      loop: false,
      duration: 2000,
      // autoplay: false,
    });

    // if (menuOpen) {
    //   animation.play();
    // } else {
    //   animation.reverse();
    // }
  });
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1440"
      height="698"
      fill="none"
      viewBox="0 0 1440 698"
    >
      <path
        ref={overLayRef}
        className="overlay"
        fill="url(#paint0_linear)"
        d="M0 16V0H1440V16H1316.46H1081.38H824.786H540.188H264.592H0Z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="719.75"
          x2="719.75"
          y1="0"
          y2="576"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.102" stopColor="#F19F8B"></stop>
          <stop offset="1" stopColor="#F19F8B" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function MenuIcon() {
  const navBtnRef = useRef();
  let menuOpen = useRef(false);
  useEffect(() => {
    // menu icon toggle
    const navBtn = navBtnRef.current;
    const handleClick = (e) => {
      e.preventDefault();
      if (!menuOpen.current) {
        navBtn.classList.add("nav__btn--open");
        menuOpen.current = true;
      } else {
        navBtn.classList.remove("nav__btn--open");
        menuOpen.current = false;
      }
    };
    navBtn.addEventListener("click", handleClick);
    return () => {
      navBtn.removeEventListener("click", handleClick);
    };

    // overlay transition
  });
  return (
    <>
      <OverLay menuOpen={menuOpen} />
      <div ref={navBtnRef} className="nav__btn">
        <span className="nav__icon"></span>
      </div>
    </>
  );
}
export function Menu() {
  return (
    <div className="menu">
      <div className="container container--menu">
        <nav className="menu__navigation">
          <ul>
            <li>
              <a href="#">About</a>
              <a href="#">Projects</a>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
