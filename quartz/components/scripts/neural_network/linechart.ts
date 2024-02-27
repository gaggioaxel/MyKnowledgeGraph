/* Copyright 2016 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
==============================================================================*/

import * as d3 from 'd3';
import { number } from 'yargs';

type DataPoint = {
  x: number;
  y: number[];
};

/**
 * A multi-series line chart that allows you to append new data points
 * as data becomes available.
 */
export class AppendingLineChart {
  private numLines: number;
  private data: DataPoint[] = [];
  private svg;
  private xScale;
  private yScale;
  private paths;
  private lineColors: string[];

  private minY = Number.MAX_VALUE;
  private maxY = Number.MIN_VALUE;

  constructor(container: d3.Selection<d3.BaseType, unknown, HTMLElement, any>, lineColors: string[]) {
    this.lineColors = lineColors;
    this.numLines = lineColors.length;
    let node = container.node() as HTMLElement;
    let totalWidth = node.offsetWidth;
    let totalHeight = node.offsetHeight;
    let margin = {top: 2, right: 0, bottom: 2, left: 2};
    let width = totalWidth - margin.left - margin.right;
    let height = totalHeight - margin.top - margin.bottom;

    this.xScale = d3.scaleLinear([0,0],[0,width]);

    this.yScale = d3.scaleLinear([0,0],[height,0]);

    this.svg = container.append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    this.paths = new Array(this.numLines);
    for (let i = 0; i < this.numLines; i++) {
        this.paths[i] = this.svg.append("path")
          .attr("class", "line")
          .style("fill", "none")
          .style("stroke", lineColors[i])
          .style("stroke-width", "1.5px");
      }
  }

  reset() {
    this.data = [];
    this.redraw();
    this.minY = Number.MAX_VALUE;
    this.maxY = Number.MIN_VALUE;
  }

  addDataPoint(dataPoint: number[]) {
    if (dataPoint.length !== this.numLines) {
      throw Error("Length of dataPoint must equal number of lines");
    }
    dataPoint.forEach(y => {
      this.minY = Math.min(this.minY, y);
      this.maxY = Math.max(this.maxY, y);
    });

    this.data.push({x: this.data.length + 1, y: dataPoint});
    this.redraw();
  }

  private redraw() {
    // Adjust the x and y domain.
    this.xScale.domain([1, this.data.length]);
    this.yScale.domain([this.minY, this.maxY]);
    d3.svg
    // Adjust all the <path> elements (lines).
    let getPathMap = (lineIndex: number) => {
        return d3.line<{x: number, y: number[]}>()
          .x(dx => this.xScale(dx.x))
          .y(dy => this.yScale(dy.y[lineIndex]));
      };
    for (let i = 0; i < this.numLines; i++) {
      this.paths[i].datum(this.data).attr("d", getPathMap(i));
    }
  }
}