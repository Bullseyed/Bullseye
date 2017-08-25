import React from 'react';
import { Row, Col } from 'react-materialize';
import { connect } from 'react-redux';
import Piechart from './PieChart';
import Bargraph from './BarGraph';


const Charts = (props) => {
  return (
    <div>
      <a href="#" style={{color: 'black'}}>
      <Row> <b> Statistics: </b> </Row>
      <Row className="valign-wrapper" height={'100%'}>

        <Col l={12} height={'100%'}>
          {
            props.demoData.barGraph && props.demoData.barGraph.map((graph) => {
              return (
                <Col l={12} key={graph.graphTitle} style={{ paddingBottom: 20 }}>
                  {graph.graphTitle}
                  <Bargraph demoData={graph} />
                </Col>
              );
            })
          }
          {
            props.demoData.pieChart && props.demoData.pieChart.map((chart) => {
              return (
                <Col l={12} key={chart.graphTitle} style={{ paddingBottom: 20 }}>
                  {chart.graphTitle}
                  <Piechart demoData={chart} />
                </Col>
              );
            })
          }
        </Col>
      </Row>
      </a>
    </div>
  );

};


const mapStateToProps = storeState => ({ demoData: storeState.demoData });


export default connect(mapStateToProps, null)(Charts);
