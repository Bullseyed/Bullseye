import React from 'react';
import { connect } from 'react-redux';
import { Row } from 'react-materialize';
import { fetchAddress } from '../../reducers/address-reducer'


const Location = (props) => {
  const locObj = {}
  if (props.bullseyeLocation[0]) {
    locObj.latitude = +props.bullseyeLocation[0]
    locObj.longitude = +props.bullseyeLocation[1]
  }
  else {
    locObj.latitude = props.report.latitude
    locObj.longitude = +props.report.longitude
  }

  props.fetchAddress(locObj);

  return (
		<Row>
			<h>
        <b>Location: </b>
        { `(${props.address[1]}) ${props.address[0]}` }
			</h>
		</Row>
	);
};

const mapStateToProps = storeState => ({
	bullseyeLocation: storeState.bullseye,
  address:  storeState.address,
  report: storeState.report
});

const mapDispatchToProps = dispatch => ({
  fetchAddress: (locationObj) => {
    dispatch(fetchAddress(locationObj))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Location);

