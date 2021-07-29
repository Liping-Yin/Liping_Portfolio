import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
function Header() {
  const [{ basket }] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <Link to="/">
          <img
            className="header__logo"
            alt="company logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          ></img>
        </Link>
      </Link>

      <div className="header__search">
        <input
          type="text"
          aria-label="search"
          className="header__search-input"
        />
        <SearchIcon className="header__search-icon" />
      </div>
      <div className="header__nav">
        <Link to="/login">
          <div className="header__item">
            <span className="header__item-1">Hello Liping</span>
            <span className="header__item-2">Sign In</span>
          </div>
        </Link>

        <div className="header__item">
          <span className="header__item-1">Return</span>
          <span className="header__item-2">&Orders</span>
        </div>
        <div className="header__item">
          <span className="header__item-1">Your</span>
          <span className="header__item-2">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__item-shoppingBasket">
            <ShoppingBasketIcon />
            <div className="header__item-2 header__basketCount">
              {basket.length}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
