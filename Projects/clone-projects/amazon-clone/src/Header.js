import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        alt="company logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      ></img>
      <div className="header__search">
        <input
          type="text"
          aria-label="search"
          className="header__search-input"
        />
        <SearchIcon className="header__search-icon" />
      </div>
      <div className="header__nav">
        <div className="header__item">
          <span className="header__item-1">Hello Liping</span>
          <span className="header__item-2">Sign In</span>
        </div>
        <div className="header__item">
          <span className="header__item-1">Return</span>
          <span className="header__item-2">&Orders</span>
        </div>
        <div className="header__item">
          <span className="header__item-1">Your</span>
          <span className="header__item-2">Prime</span>
        </div>
        <div className="header__item-shoppingBasket">
          <ShoppingBasketIcon />
          <div className="header__item-2 header__basketCount">0</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
