import React from 'react';
import d3 from 'd3';
import DataCircles from './DataCircles';
import XYAxis from './XYAxis';

// Returns the largest X coordinate from the data set
const xMax = data => d3.max(data, d => d[0]);

// Returns the highest Y coordinate from the data set
const yMax = data => d3.max(data, d => d[1]);

// Returns a function that "scales" X coordinates from the data to fit the chart
const xScale = props => {
  return d3
    .scale
    .linear()
    .domain([0, xMax(props.data)])
    .range([props.padding, props.width - props.padding * 2]);
};

// Returns a function that "scales" Y coordinates from the data to fit the chart
const yScale = props => {
  return d3
    .scale
    .linear()
    .domain([0, yMax(props.data)])
    .range([props.height - props.padding, props.padding]);
};

export default props => {
  const scales = { xScale: xScale(props), yScale: yScale(props) };
  return (
    <svg width={props.width} height={props.height}>
      <DataCircles {...props} {...scales} />
      <XYAxis {...props} {...scales} />
    </svg>
  );
};
