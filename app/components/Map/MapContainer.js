import React from 'react'
import { withGoogleMap, GoogleMap, InfoWindow, Marker } from 'react-google-maps'
import InitialMap from './Map'
import { connect } from 'react-redux'

import { setCoords } from '../../reducers/map-reducer'
import { fetchRests, clearRests } from '../../reducers/rest-reducer'
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
      clearRests()
      this.setState({ selectedMarker: { lat: e.latLng.lat(), lng: e.latLng.lng() }, selectedRestIndex: [] },
        () => {
          makeYelpReq(this.state.selectedMarker.lat, this.state.selectedMarker.lng, this.props.radius.value)
          this.props.addBullseye([this.state.selectedMarker.lat, this.state.selectedMarker.lng])
        }
      )
    }

    const clearRests = async () => {
      await this.props.clearRests()
    }

    const makeYelpReq = async (latitude, longitude, radius) => {
      let offset = 0
      let first = true
      const locationObj = { latitude, longitude, radius, term: this.props.bType, }
      this.props.fetchZip(locationObj)
      while (offset<950) {
        locationObj.offset = offset
        await this.props.fetchRests(locationObj)
        if (first) {
          offset = offset + 51
          first = false
        }
        else offset=offset+50

      }
    }

    return (
      <div style={{ height: '100vh' }}>
        <InitialMap
          containerElement={<div style={{ height: '100vh' }} />}
          mapElement={<div style={{ height: '100vh' }} />}
          onMapClick={onMapClick}
          selectedMarker={this.state.selectedMarker}
          radius={this.props.radius || 0}
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
  addLngLat: (longitude, latitude) => dispatch(addLngLat(longitude, latitude)),
  clearRests: () => dispatch(clearRests())
})

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer)
