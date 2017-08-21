import React from 'react';
import { connect } from 'react-redux';
import { Row } from 'react-materialize';
import { fetchAddress } from '../../reducers/address-reducer'


const Location = (props) => {
  const locObject = {
          latitude: +props.bullseyeLocation[0],
          longitude: +props.bullseyeLocation[1]
        };
  props.fetchAddress(locObject);

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
  address:  storeState.address
});

const mapDispatchToProps = dispatch => ({
  fetchAddress: (locationObj) => {
    dispatch(fetchAddress(locationObj))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Location);

