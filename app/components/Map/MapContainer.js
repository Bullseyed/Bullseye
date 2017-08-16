import React from 'react'
import { withGoogleMap, GoogleMap, InfoWindow, Marker } from 'react-google-maps'
import InitialMap from './Map'
import { connect } from 'react-redux'

import { setCoords } from '../../reducers/map-reducer'
import { fetchRests } from '../../reducers/rest-reducer'
import { fetchZip } from '../../reducers/zip-reducer'



class MapContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedMarker: {},
      restList: this.props.rests,
      selectedRestIndex: [],
      zip:[]

    }
    this.onMapClick = this.onMapClick.bind(this);
    this.getMeters = this.getMeters.bind(this);
    this.makeYelpReq = this.makeYelpReq.bind(this);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.markBullseye = this.markBullseye.bind(this);
  }
  onMarkerClick(rest, index) {
    if (!this.state.selectedRestIndex.includes(index)) {
      this.setState({ selectedRestIndex: [...this.state.selectedRestIndex, index] })
    }
  }

  markBullseye(e){
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
      selectedMarker: { lat: e.latLng.lat(), lng: e.latLng.lng() },
      selectedRestIndex: []
    })
    this.makeYelpReq(this.state.selectedMarker.lat, this.state.selectedMarker.lng, this.props.radius.value)
  }

  makeYelpReq(latitude, longitude, radius) {
    const locationObj = {
      latitude,
      longitude,
      radius,
      term: this.props.bType,
    }
    this.props.fetchRests(locationObj)
    this.props.fetchZip(locationObj)
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
          onMarkerClick={this.onMarkerClick}
          restList={this.props.rests}
          selectedRestIndex={this.state.selectedRestIndex}
          markBullseye={this.markBullseye}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ radius, rests, bType, zip }) => ({ radius, rests, bType, zip })

const mapDispatchToProps = dispatch => ({
  fetchRests: (locationObj) => dispatch(fetchRests(locationObj)),
  fetchZip: (locationObj) => dispatch(fetchZip(locationObj))
})

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer)
