import React from 'react';
import { connect } from 'react-redux';
import { Row } from 'react-materialize';
import { fetchAddress } from '../../reducers/address-reducer'


class Location extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    const locObj = {}
    if (this.props.bullseyeLocation[0]) {
      locObj.latitude = +this.props.bullseyeLocation[0]
      locObj.longitude = +this.props.bullseyeLocation[1]
      this.props.fetchAddress(locObj);
    }
    else {
      locObj.latitude = +this.props.report.latitude
      locObj.longitude = +this.props.report.longitude
      this.props.fetchAddress(locObj);
    }
  }

  render() {
    return (
      <Row>
        <h>
          <b>Location: </b>
          {this.props.address[0] && `(${this.props.address[4].address_components[0].long_name}) ${this.props.address[0].formatted_address}`}
          {this.props.address[0] && console.log('yo', this.props.address)}
        </h>
      </Row>
    );
  }
}

const mapStateToProps = storeState => ({
  bullseyeLocation: storeState.bullseye,
  address: storeState.address,
  report: storeState.report
});

const mapDispatchToProps = dispatch => ({
  fetchAddress: (locationObj) => {
    dispatch(fetchAddress(locationObj))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Location);

