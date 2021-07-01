"use strict ";
// import * as d3 from "d3";

const pathElement = d3.select("#one path");
// console.log(pathElement);

// D3: path
function drawCircle(context, radius) {
  context.moveTo(radius, 0);
  context.arc(0, 0, radius, 0, 2 * Math.PI);
}

const context = d3.path();
drawCircle(context, 40);
pathElement.attr("d", context.toString());

//d3-force
var nodes = [].concat(
  d3.range(80).map(function () {
    return { type: "a" };
  }),
  d3.range(100).map(function () {
    return { type: "b" };
  })
);

var node = d3
  .select("#two")
  .append("g")
  .selectAll("circle")
  .data(nodes)
  .enter()
  .append("circle")
  .attr("r", 2.5)
  .attr("fill", function (d) {
    return d.type === "a" ? "brown" : "steelblue";
  });

var simulation = d3
  .forceSimulation(nodes)
  .force("change", d3.forceCollide().radius(5))
  .force(
    "r",
    d3.forceRadial(function (d) {
      return d.type === "a" ? 100 : 200;
    })
  )
  .on("tick", ticked);

function ticked() {
  node
    .attr("cx", function (d) {
      return d.x;
    })
    .attr("cy", function (d) {
      return d.y;
    });
}

// datasets
d3.csv("datasets/companies.csv", function (data) {
  console.log(data);
  //   data.forEach(function (d) {
  //     consol.log(d.company_x);
  //   });
});
