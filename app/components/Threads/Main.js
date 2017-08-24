import React from 'react';
import { Row, Col } from 'react-materialize';
import MapContainer from '../Map/MapContainer';
import Nav from '../Nav/Nav';
import AddNew from './AddNew';
import Threads from './Threads';


const ThreadsMain = () => {
  return (
    <Row>
      <Col l={5} style={{ paddingRight: 0, paddingLeft: 0 }}>
        <MapContainer />
      </Col>

      <Col l={7} style={{ paddingRight: 0, paddingLeft: 0 }}>
        <Row>
          <Nav />
        </Row>
      <div className="center-align">
      <p style={{marginTop: 15, marginBottom: 0, color: '#af0000'}}>
        Click the map to select location
      </p>
      <Row>
        <AddNew />
      </Row>
      </div>
      <Row>
        <div style={{ overflow: 'auto', height: 450 }}>
          <Threads />
        </div>
      </Row>
      </Col>
    </Row>
  );
};

export default ThreadsMain;
