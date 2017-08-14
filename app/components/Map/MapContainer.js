import React from 'react'
import { withGoogleMap, GoogleMap, InfoWindow, Marker } from 'react-google-maps'
import InitialMap from './Map'
import { connect } from 'react-redux'

import { setCoords } from '../../reducers/map-reducer'
import { fetchRests } from '../../reducers/rest-reducer'



class MapContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedMarker: {},
      restList: this.props.rests,
      selectedRestIndex: []

    }
    this.onMapClick = this.onMapClick.bind(this);
    this.getMeters = this.getMeters.bind(this);
    this.clickedCircle = this.clickedCircle.bind(this);
    this.makeYelpReq = this.makeYelpReq.bind(this);
    this.onMarkerClick = this.onMarkerClick.bind(this);
  }
  onMarkerClick(rest, index) {
    this.setState({ selectedRestIndex: [...this.state.selectedRestIndex,index] })
    console.log(this.state.selectedRestIndex)
  }
  clickedCircle(e) {
    this.setState({
      selectedMarker: {
        lat: e.latLng.lat(), lng: e.latLng.lng()
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
    this.makeYelpReq(this.state.selectedMarker.lat, this.state.selectedMarker.lng, this.props.radius.value)
  }

  makeYelpReq(lat, lng, rad) {
    const locationObj = {
      latitude: lat,
      longitude: lng,
      radius: rad,
    }
    this.props.fetchRests(locationObj)

    this.state.restList.forEach(rest => { return rest.showInfo = false })
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
          restList={this.props.rests}
          onMarkerClick={this.onMarkerClick}
          selectedRestIndex={this.state.selectedRestIndex}
        />
      </div>
    )
  }
}

const mapStateToProps = storeState => ({
  radius: storeState.radius,
  rests: storeState.rests

})

const mapDispatchToProps = dispatch => ({
  fetchRests: (locationObj) => dispatch(fetchRests(locationObj))
})

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer)
