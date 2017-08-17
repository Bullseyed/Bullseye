import React from 'react';
import { Row, Col } from 'react-materialize';
import { connect } from 'react-redux';
import Piechart from './PieChart';
import Bargraph from './BarGraph';


const ReportMain = (props) => {
    return (
   <Row className="valign-wrapper" height={'100%'}>
   <Col l={12} height={'100%'}>
      {
        props.demoData.barGraph && props.demoData.barGraph.map((graph, i) => {
          return (
            <Col l={4} key={i + 1}>
              { graph.graphTitle }
              <Bargraph demoData={graph} />
            </Col>
          );
        })
      }
      {
        props.demoData.pieChart && props.demoData.pieChart.map((chart, i) => {
          return (
            <Col l={4} key={i + 1}>
              { chart.graphTitle }
              <Piechart demoData={chart} />
            </Col>
          );
        })
      }
      </Col>
   </Row>
    );

};


const mapStateToProps = storeState => ({ demoData: storeState.demoData });


export default connect(mapStateToProps, null)(ReportMain);
