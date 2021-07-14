import React, { Component } from "react";
import "./FilterableProductTable.css";

export default class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      isStockOnly: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
  }
  render() {
    return (
      <div className="filterableProductTable">
        <SearchBar handleChange={this.handleChange} />
        <ProductTable
          filterText={this.state.filterText}
          isStockOnly={this.state.isStockOnly}
        />
      </div>
    );
  }
}

export function SearchBar(props) {
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

export function ProductTable(props) {
  // interate JSON data by categories
  function generateRows() {}
  return (
    <div className="productTable">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{generateRows()}</tbody>
      </table>
    </div>
  );
}

export function CategoryRow(props) {
  return (
    <div className="categoryRow">
      <tr>
        <td>{props.category}</td>
      </tr>
    </div>
  );
}

export function ProductRow(props) {
  return (
    <div className="productRow">
      <tr>
        <td>{props.name}</td>
        <td>{props.price}</td>
      </tr>
    </div>
  );
}
