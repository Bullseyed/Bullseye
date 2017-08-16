import React, { Component } from 'react'
import { Row, Col } from 'react-materialize'
import { connect } from 'react-redux'
import Filter from './Filter/Main'
import MapContainer from './Map/MapContainer'
import Nav from './Nav/Nav'
import { demographicThunk } from '../reducers/demographic'

class Main extends React.Component {

  componentDidMount() {
    console.log('component did mount')
    console.log(this.props)
    this.props.demographicThunk()

  }
  render() {
    return (
      <Row>
        <Col l={8} style={{ paddingRight: 0, paddingLeft: 0 }}>
          <MapContainer />
        </Col>

        <Col l={4} style={{ paddingRight: 0, paddingLeft: 0 }}>
          <Row>
            <Nav />
          </Row>
          <Filter />
        </Col>
      </Row>
    )
  }
}
const mapState = ({ demographic }) => ({
  demographic
})
export default connect(mapState, { demographicThunk })(Main);
