import React from 'react';
import { Row } from 'react-materialize';

const Density = ({zipsCount, demoData}) => {

  const avgPopPerZip = demoData.pieChart &&
    (demoData.pieChart[0].data[0].y + demoData.pieChart[0].data[1].y) / zipsCount;

  function getDensityScore (population) {
    return population >= 65000
      ? 100
      : population / 65000;
  }

  return (
      <Row>
        <h>
          <b>Residential Density Score: </b>
         { Math.round(getDensityScore(avgPopPerZip) * 100) }/100
        </h>
      </Row>
    );
};

export default Density;
