"use strict"

/* Configuration variables: drawing */
let svgWidth = 600;
let svgHeight = 600;
let margin = 25;

/* Resize div to match width of visualization. */
d3.select("#container")
    .style("width", String(svgWidth) + "px");

/* Create drawing canvas */
let svg = d3.select("#canvas")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

/* Draw canvas border */
svg.append("rect")
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

/* Draw margin border. */
svg.append("rect")
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-dasharray", "5")
    .attr("x", margin)
    .attr("y", margin)
    .attr("width", svgWidth - margin * 2)
    .attr("height", svgHeight - margin * 2);

let dataset = [
    { x: 3, y: 10 },
    { x: 4.5, y: 237 },
    { x: 3, y: 90 },
    { x: 4, y: 214 },
    { x: 3, y: 102 },
    { x: 3.5, y: 165 }
];

let happinessRange = d3.scaleLinear()
    .domain([0, 5])
    .range([margin, svgWidth - margin]);

let minutesOnYoutube = d3.scaleLinear()
    .domain([0, 500])
    .range([svgHeight - margin, margin]);

let circles = svg.selectAll("circle")
    .data(dataset)
    .join("circle");

circles.attr("r", 5)
    .attr("cx", function (value) {
        return happinessRange(value.x);
    })
    .attr("cy", function (value) {
        return minutesOnYoutube(value.y);
    })

/**** label the axes ****/
let xAxisLabel = svg.append("text")
    .attr("x", svgWidth / 2)
    .attr("y", svgHeight - (margin / 4))
    .attr("text-anchor", "middle")
    .text("Happiness level scale: 0 being 😔 - 5 being 😃");

let yAxisLabel = svg.append("text")
    .attr("x", -svgHeight / 2)
    .attr("y", margin / 2)
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .text("Time spent on Youtube in minutes")
    .attr("transform", "rotate(-90)");

/**** label key graph coordinates ****/
let originLabel = svg.append("text")
    .attr("x", margin)
    .attr("y", svgHeight - (margin / 2))
    .attr("text-anchor", "middle")
    .text("0,0");

let xAxisMaxValue = svg.append("text")
    .attr("x", svgWidth - margin)
    .attr("y", svgHeight - (margin / 2))
    .attr("text-anchor", "end")
    .text("5");

let yAxisMaxValue = svg.append("text")
    .attr("x", -margin)
    .attr("y", margin / 2)
    .attr("text-anchor", "end")
    .attr("alignment-baseline", "middle")
    .text("500")
    .attr("transform", "rotate(-90)");


