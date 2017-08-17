import React, { Component } from 'react'
import { Row, Col } from 'react-materialize'
import { connect } from 'react-redux'
import Filter from './Filter/Main'
import MapContainer from './Map/MapContainer'
import Nav from './Nav/Nav'
import { retrieveLoggedInUser } from '../reducers/auth'

class Main extends React.Component {

  componentDidMount() {
    this.props.retrieveUser()
  }

  render() {
    return (
      <Row>
        <Col l={8} style={{ paddingRight: 0, paddingLeft: 0}}>
          <MapContainer />
        </Col>

        <Col l={4} style={{ paddingRight: 0, paddingLeft: 0, height: '100%' }}>
          <Row>
            <Nav />
          </Row>
          <Filter />
        </Col>
      </Row>
    )
  }
}

const mapDispatch = dispatch => ({
  retrieveUser: () => {
    dispatch(retrieveLoggedInUser())
  }

})

export default connect(null, mapDispatch)(Main);
