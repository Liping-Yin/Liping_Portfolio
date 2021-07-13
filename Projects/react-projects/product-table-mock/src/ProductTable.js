import React from "react";

function ProductTable(props) {
  // interate JSON data by categories
  function generateRows() {}
  return (
    <div className="productTable">
      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        {generateRows()}
      </table>
    </div>
  );
}

export default ProductTable;

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
