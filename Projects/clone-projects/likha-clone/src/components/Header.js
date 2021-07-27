import React from "react";
import { Link } from "react-router-dom";
import { Logo, MenuOpen, MenuClose } from "../assets/IconsSvg";
export default function Header(props) {
  const { menuOpenSvg, mobile } = props;
  return (
    <header className="header">
      <div className="container header__container ">
        <div className="header__tools">
          <Link to="#" className="header__back link">
            <svg
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              Add svg icon
              <path></path>
              <path></path>
            </svg>
            <span>Back</span>
          </Link>
        </div>
        <Link to="/" className="header_logo link">
          {mobile ? (
            <Logo
              id="layer-1"
              className="header__logo__mobile"
              x="0"
              y="0"
              viewBox="0 0 237.8 131.7"
            />
          ) : (
            <Logo
              id="layer-1"
              className="header__logo__desktop"
              x="0"
              y="0"
              viewBox="0 0 237.8 131.7"
            />
          )}
        </Link>
        <div className="header__actions">
          <button type="button" className="header__menuButton link">
            {menuOpenSvg ? (
              <MenuOpen className="menu-open" viewBox="0 0 24 24" />
            ) : (
              <MenuClose className="menu-close" viewBox="0 0 24 24" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
