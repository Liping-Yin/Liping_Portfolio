"use strict";

/////////////////// Generate Table /////////////////////
const MOUNTAINS = [
  { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
  { name: "Everest", height: 8848, place: "Nepal" },
  { name: "Mount Fuji", height: 3776, place: "Japan" },
  { name: "Vaalserberg", height: 323, place: "Netherlands" },
  { name: "Denali", height: 6168, place: "United States" },
  { name: "Popocatepetl", height: 5465, place: "Mexico" },
  { name: "Mont Blanc", height: 4808, place: "Italy/France" },
];

function buildTable(data) {
  let table = document.createElement("table");
  let fields = Object.keys(data[0]);
  let headRow = document.createElement("tr");
  fields.forEach(function (field) {
    let headCell = document.createElement("th");
    headCell.appendChild(document.createTextNode(field));
    headRow.appendChild(headCell);
  });

  table.appendChild(headRow);

  data.forEach(function (object) {
    let row = document.createElement("tr");
    fields.forEach(function (field) {
      let cell = document.createElement("td");
      cell.appendChild(document.createTextNode(object[field]));
      if (typeof object[field] == "number") {
        cell.style.textAlign = "right";
      }
      row.appendChild(cell);
    });
    table.appendChild(row);
  });

  return table;
}

document.querySelector("#moutains").appendChild(buildTable(MOUNTAINS));

////////////////////  Elements by tag name ////////////////
// implement my own version of getElementsByTagName

function byTagName(node, tagName) {
  // Get all child elements
  let found = [];
  tagName = tagName.toUpperCase();
  function explore(node) {
    let childElements = Array.from(node.childNodes);
    childElements.forEach(function (ele) {
      if (ele.nodeType == document.ELEMENT_NODE) {
        if (ele.nodeName == tagName) {
          found.push(ele);
        }
      }
      explore(ele);
    });
  }
  explore(node);
  return found.length;
}

const node = document.body.querySelector("#tagPractice");

console.log(byTagName(node, "h1"));
console.log(byTagName(node, "span"));
console.log(byTagName(node.querySelector("p"), "span"));

/////////////////////// The Cat's Hat /////////////////////
// to be done...
