import React from 'react'
import { withGoogleMap, GoogleMap, InfoWindow, Marker } from 'react-google-maps'
import InitialMap from './Map'
import { connect } from 'react-redux'

import { setCoords } from '../../reducers/map-reducer'
import { fetchRests } from '../../reducers/rest-reducer'
import { fetchZip } from '../../reducers/zip-reducer'
import { markBullseye } from '../../reducers/bullseye-reducer'
import { addLngLat } from '../../reducers/report'


class MapContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedMarker: {},
      restList: this.props.rests,
      selectedRestIndex: [],
      selectedRestIndex: [],
      zip:[]
    }
  }
  onMarkerClick(rest, index) {
    if (!this.state.selectedRestIndex.includes(index)) {
      this.setState({ selectedRestIndex: [...this.state.selectedRestIndex, index] })
    }
  }
  
  render() {
    const onMarkerClick = (rest, index) => {
      !this.state.selectedRestIndex.includes(index)
        ? this.setState({ selectedRestIndex: [...this.state.selectedRestIndex, index] })
        : null
    }
    const markBullseye = (e) => this.setState({ selectedMarker: { lat: e.latLng.lat(), lng: e.latLng.lng() } })

    const onMapClick = (e) => {
      this.setState({ selectedMarker: { lat: e.latLng.lat(), lng: e.latLng.lng() }, selectedRestIndex: [] },
        () => {
          makeYelpReq(this.state.selectedMarker.lat, this.state.selectedMarker.lng, this.props.radius.value)
          this.props.addBullseye([this.state.selectedMarker.lat, this.state.selectedMarker.lng])
        }
      )
    }

    const makeYelpReq = (latitude, longitude, radius) => {
      const locationObj = { latitude, longitude, radius, term: this.props.bType }
      this.props.fetchRests(locationObj)
      this.props.fetchRests(locationObj)
      this.props.fetchZip(locationObj)
    }
    
    return (
      <div style={{ height: '100vh' }}>
        <InitialMap
          containerElement={<div style={{ height: '100vh' }} />}
          mapElement={<div style={{ height: '100vh' }} />}
          onMapClick={onMapClick}
          selectedMarker={this.state.selectedMarker}
          radius={this.props.radius.value || 0}
          onMarkerClick={onMarkerClick}
          restList={this.props.rests}
          selectedRestIndex={this.state.selectedRestIndex}
          markBullseye={markBullseye}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ radius, rests, bType, zip }) => ({ radius, rests, bType, zip })

const mapDispatchToProps = dispatch => ({
  fetchRests: (locationObj) => dispatch(fetchRests(locationObj)),
  fetchZip: (locationObj) => dispatch(fetchZip(locationObj)),
  addBullseye: (coordsArr) => dispatch(markBullseye(coordsArr)),
  addLngLat: (longitude, latitude) => dispatch(addLngLat(longitude, latitude))
})

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer)
