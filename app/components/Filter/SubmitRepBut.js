import React from 'react';
import { connect } from 'react-redux';
import { Button, Row } from 'react-materialize';
import { Link } from 'react-router-dom';
import { demographicThunk } from '../../reducers/demo-reducer';
import { addLngLat } from '../../reducers/report';
import { Col } from 'react-materialize'

const SubmitRepBut = (props) => {

  const fetchReports = () => {
    props.demographicThunk(props.zip);
    props.addLngLat(props.bullseye[0], props.bullseye[1])
  };

  return (
    <Col s={12}>
      <Row>
        <Link to='/report'>
          <Button
            waves='light'
            onClick={fetchReports}
          >
            Get Detailed Report
          </Button>
        </Link>
      </Row>
    </Col>
  );
};

const mapStateToProps = ({ demoData, zip, bullseye }) => ({
  demoData, zip, bullseye
});

export default connect(mapStateToProps, { demographicThunk, addLngLat })(SubmitRepBut);

