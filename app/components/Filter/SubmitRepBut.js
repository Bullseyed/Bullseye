import React from 'react';
import { connect } from 'react-redux';
import { Button, Row } from 'react-materialize';
import { Link } from 'react-router-dom';
import { demographicThunk } from '../../reducers/demo-reducer';


const SubmitRepBut = (props) => {

  const fetchReports =  () => {
      props.demographicThunk(props.zip);
  };

    return (
      <Row>
  			<Link to ='/report'>
          <Button
            waves='light'
            onClick={fetchReports}
          >
            Get Detailed Report
          </Button>
        </Link>
      </Row>
    );
  };

  const mapStateToProps = ({ demoData, zip }) => ({
    demoData, zip
  });

export default connect(mapStateToProps, { demographicThunk })(SubmitRepBut);

