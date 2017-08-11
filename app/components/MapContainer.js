import React from 'react'
import { withGoogleMap, GoogleMap, InfoWindow, Marker } from 'react-google-maps'
import InitialMap from './Map'
import { connect } from 'react-redux'

import { setCoords } from '../reducers/map-reducer'



class MapContainer extends React.Component {

  constructor(props) {
    super(props)
    this.onMapClick = this.onMapClick.bind(this);
  }

  onMapClick(e) {
    this.props.setCoords(e.da.x, e.da.y)
  }

	render() {
		return (
      <div style={{height: '100vh'}}>
        <InitialMap
          containerElement={<div style={{height: '100vh'}} />}
          mapElement={<div style={{height: '100vh'}} />}
          onMapClick={this.onMapClick}
          selectedMarker={this.props.selectedMarker}
          />
      </div>
    )
	}
}

// CONTAINER

const mapState = (state) => ({
  selectedMarker: state.selectedMarker
})


export default connect(mapState, { setCoords })(MapContainer)
