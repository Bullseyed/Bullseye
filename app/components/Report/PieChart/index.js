import React from 'react';
import { VictoryPie, VictoryLabel, VictoryTheme } from 'victory';

const Piechart = (props) => {
    return (
      <svg viewBox="0 0 400 400">
        <VictoryPie
          theme={VictoryTheme.material}

          data={props.demoData && props.demoData.data}
          innerRadius={0} labelRadius={80}
          style={{ labels: { fontSize: 12, fill: "black"}}}
        />
      </svg>
    );
};

export default Piechart;
