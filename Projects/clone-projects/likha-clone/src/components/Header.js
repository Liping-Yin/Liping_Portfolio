import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Logo, MenuOpen, MenuClose } from "../assets/IconsSvg";
import { MouseContext } from "./Cursor";

export default function Header() {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const { menuOpen } = cursorType;
  const logoVisibilityClassName =
    "header__logo " + (menuOpen ? "hide" : "show") + " link";

  return (
    <header className="header">
      <div className="container container--header ">
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
        <Link to="/" className={logoVisibilityClassName}>
          <Logo
            id="layer-1"
            className="header__logo desktop"
            x="0"
            y="0"
            viewBox="0 0 237.8 131.7"
          />
        </Link>
        {/* change mouse state */}
        <div
          className="header__actions"
          onMouseEnter={() => cursorChangeHandler({ hoverMenu: true })}
          onMouseLeave={() => cursorChangeHandler({ hoverMenu: false })}
        >
          <button type="button" className="header__menuButton link">
            {!menuOpen ? (
              <MenuOpen
                // open menu
                onClick={() => {
                  cursorChangeHandler({ menuOpen: true });
                }}
                className="menu-open"
                viewBox="0 0 24 24"
              />
            ) : (
              <MenuClose
                onClick={() => {
                  cursorChangeHandler({ menuOpen: false });
                }}
                className="menu-close"
                viewBox="0 0 24 24"
              />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
