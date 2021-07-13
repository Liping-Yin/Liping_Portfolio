import React from "react";
import "./SearchBar.css";
function SearchBar(props) {
  return (
    <div className="searchBar">
      <form>
        <input
          onChange={props.handleChange}
          name="filterText"
          type="text"
          placeholder="Search..."
        />
        <label>
          <input type="radio" name="isStockOnly" />
          Only show products in stock
        </label>
      </form>
    </div>
  );
}

export default SearchBar;
