import React from 'react'
import { withGoogleMap, GoogleMap, InfoWindow, Marker } from 'react-google-maps'
import InitialMap from './Map'
import { connect } from 'react-redux'

import { setCoords } from '../reducers/map-reducer'



class MapContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedMarker: {}
    }
    this.onMapClick = this.onMapClick.bind(this);
  }

  onMapClick(e) {
    console.log(e)
    this.setState({selectedMarker: {lat: e.latLng.lat(), lng: e.latLng.lng()}})
    //this.props.setCoords(e.da.x, e.da.y)
  }

	render() {
    console.log(this.state.selectedMarker)
		return (
      <div style={{height: '100vh'}}>
        <InitialMap
          containerElement={<div style={{height: '100vh'}} />}
          mapElement={<div style={{height: '100vh'}} />}
          onMapClick={this.onMapClick}
          selectedMarker={this.state.selectedMarker}
          />
      </div>
    )
	}
}

export default MapContainer
