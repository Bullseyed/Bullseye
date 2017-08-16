import React, { Component } from 'react';

import { LabeledArc } from './Arc';

class Piechart extends Component {
   constructor() {
        super();

        this.pie = d3.layout.pie()
                     .value((d) => d.value);
        this.colors = d3.scale.category10();
    }

  arcGenerator(d, i) {}

  render() {}
}

export default Piechart;
