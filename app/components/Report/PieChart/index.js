import React from 'react';
import { VictoryPie, VictoryLabel, VictoryTheme } from 'victory';

export default class Piechart extends React.Component {
  render() {
    return (
      <svg viewBox="0 0 400 400">
        <VictoryPie
          theme={VictoryTheme.material}
          width={400} height={400}
          data={[
            {x: 1, y: 120}, {x: 2, y: 150}, {x: 'hello', y: 30}
          ]}
          innerRadius={0} labelRadius={100}
          style={{ labels: { fontSize: 20, fill: "black"}}}
        />
        <VictoryLabel
          textAnchor="middle"
          x={200} y={200}
          text="Word(s)"
        />
      </svg>
    );
  }
}
