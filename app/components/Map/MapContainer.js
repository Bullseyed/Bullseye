import React from 'react'
import { connect } from 'react-redux'

import InitialMap from './Map'
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
      zip:[]
      }
  }


  render() {
    const onMarkerClick = (rest, index) => {
      !this.state.selectedRestIndex.includes(index)
        ? this.setState({ selectedRestIndex: [...this.state.selectedRestIndex, index] })
        : null
    }

    const onMapClick = (e) => {
      this.props.addBullseye([e.latLng.lat(), e.latLng.lng()])
      this.setState({ selectedMarker: { lat: e.latLng.lat(), lng: e.latLng.lng() }, selectedRestIndex: []},
        () => {
          clearRests()
          makeYelpReq(this.state.selectedMarker.lat, this.state.selectedMarker.lng, this.props.radius.value)
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
          zoom={this.props.map.zoom}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ radius, rests, bType, zip, map }) => ({ radius, rests, bType, zip, map })

const mapDispatchToProps = dispatch => ({
  fetchRests: (locationObj) => dispatch(fetchRests(locationObj)),
  fetchZip: (locationObj) => dispatch(fetchZip(locationObj)),
  addBullseye: (coordsArr, callback) => dispatch(markBullseye(coordsArr, callback)),
  addLngLat: (longitude, latitude) => dispatch(addLngLat(longitude, latitude)),
  clearRests: () => dispatch(clearRests())
})

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer)
