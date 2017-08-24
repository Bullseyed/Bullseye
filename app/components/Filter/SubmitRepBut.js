import React from 'react';
import { connect } from 'react-redux';
import { Button, Row, Col } from 'react-materialize';
import { Link } from 'react-router-dom';
import { demographicThunk } from '../../reducers/demo-reducer';
import { addLngLat } from '../../reducers/report';
import fipsDict from '../../../fips-codes.js';

const SubmitRepBut = (props) => {

  const getFips = (state) => {
    return fipsDict[state];
  };

  const fetchReports = () => {
    props.demographicThunk(props.zip, getFips(props.rests[0].location.state));
    props.addLngLat(props.bullseye[0], props.bullseye[1]);
  };

  return (
    <Col s={12}>
      <Row>
      { (props.rests && props.radius && props.bType)
      ?
        <Link to="/report">
          <Button large
            waves="light"
            onClick={fetchReports}
          >
            Get Report
          </Button>
        </Link>
      : <Button large
            waves="light"
            onClick={fetchReports}
            disabled
          >
            Get Report
          </Button>
      }
      </Row>
    </Col>
  );
};

const mapStateToProps = ({ demoData, zip, rests, bullseye, bType, radius }) => ({
  demoData, zip, rests, bullseye, bType, radius
});

export default connect(mapStateToProps, { demographicThunk, addLngLat })(SubmitRepBut);
