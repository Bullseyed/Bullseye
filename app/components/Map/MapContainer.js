import React from 'react'
import { withGoogleMap, GoogleMap, InfoWindow, Marker } from 'react-google-maps'
import InitialMap from './Map'
import { connect } from 'react-redux'

import { setCoords } from '../../reducers/map-reducer'



class MapContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedMarker: {},
      radius: 1000
    }
    this.onMapClick = this.onMapClick.bind(this);
    this.getMeters = this.getMeters.bind(this);
    this.clickedCircle = this.clickedCircle.bind(this);
  }
  clickedCircle(e) {
    this.setState({
      selectedMarker: { lat: e.latLng.lat(), lng: e.latLng.lng()
      }
    })
  }
  getMeters(i) {
    return i * 1609.344;
  }
  onMapClick(e) {
    this.setState({
      selectedMarker: { lat: e.latLng.lat(), lng: e.latLng.lng() }
    })
  }

  render() {
    return (
      <div style={{ height: '100vh' }}>
        <InitialMap
          containerElement={<div style={{ height: '100vh' }} />}
          mapElement={<div style={{ height: '100vh' }} />}
          onMapClick={this.onMapClick}
          selectedMarker={this.state.selectedMarker}
          radius={this.props.radius.value || 0}
          clickedCircle={this.clickedCircle}
        />
      </div>
    )
  }
}

const mapStateToProps = storeState => ({
	radius: storeState.radius
})

export default connect (mapStateToProps,null)(MapContainer)
