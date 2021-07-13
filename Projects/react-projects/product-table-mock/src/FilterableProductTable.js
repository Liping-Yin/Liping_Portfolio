import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
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
