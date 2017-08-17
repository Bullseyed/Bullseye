import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryLabel } from 'victory';

const Bargraph = (props) => {
  console.log(props)
    return (
      <VictoryChart
        //theme={VictoryTheme.material}
        domainPadding={{x: [20, 0]}}
        padding={{top: 0, bottom: 50, left: 80, right: 80 }}
        // width={100000}
        // height={""}
      >
      <VictoryAxis
        style={{
          parent: { border: "1px solid #ccc" },
          axisLabel: {fontSize: 16, padding: 30}
        }}
        label={props.demoData && props.demoData.xLabel}
      />
      <VictoryAxis
        dependentAxis
        style={{
          parent: { border: "1px solid #ccc" },
          axisLabel: {fontSize: 16, padding: 50}
        }}
        label={props.demoData && props.demoData.yLabel}
        //axisLabelComponent={<VictoryLabel text={props.demoData.yLabel} />}
      />
        <VictoryBar
          data={props.demoData && props.demoData.data}
          x="x"
          y="y"
          style={{
            data: { fill: "#c43a31", stroke: "black", strokeWidth: 1 }
          }}
        />
      </VictoryChart>
    );
};

export default Bargraph;
