import React from "react";
import { FaceBook, Instagram, LinkedIn } from "../assets/SocialSvg";
import { Link } from "react-router-dom";
export default function Menu(props) {
  const { menuOpen } = props;
  return (
    <div className="menu">
      {menuOpen ? (
        <div className="container menu__container">
          <div className="menu__logo">
            <img
              src="https://likhaaesthetic.ie/wp-content/themes/wondr/img/logo.svg"
              alt="Likha"
            />
          </div>
          <div className="menu__nav">
            <nav>
              <span className="menu__category"> Explore</span>
              <ul>
                <li className="menu__nav__item">
                  <Link className="link" to="/treatment">
                    Treatment
                  </Link>
                </li>
                <li className="menu__nav__item">
                  <Link className="link" to="/products">
                    Products
                  </Link>
                </li>
                <li className="menu__nav__item">
                  <Link className="link" to="/reviews">
                    Reviews
                  </Link>
                </li>
              </ul>
            </nav>

            <nav>
              <span className="menu__category">The Clinic</span>
              <ul>
                <li className="menu__nav__item">
                  <Link className="link" to="/about">
                    About
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="menu__contact">
            <nav>
              <span className="menu__category"> Let's Talk</span>
              <ul>
                <li className="menu__nav__item">
                  <Link className="link" to="/contact">
                    Enquire
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="menu__social">
            <a href="https://www.facebook" className="menu__social__link link">
              {""}
              <FaceBook />
            </a>

            <a
              href="https://www.instagram.com"
              className="menu__social__link link"
            >
              {""}
              <Instagram />
            </a>
            <a
              href="https://www.linkedin.com"
              className="menu__social__link link"
            >
              {""}
              <LinkedIn />
            </a>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
