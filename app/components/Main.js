import React, { Component } from 'react'
import { Row, Col } from 'react-materialize'

import Filter from './Filter/Main'
import MapContainer from './Map/MapContainer'
import Nav from './Nav/Nav'

const Main = (props) => {
  return (
    <Row>
      <Col l={8} style={{ paddingRight: 0, paddingLeft: 0, }}>
        <MapContainer />
      </Col>

      <Col l={4} style={{ paddingRight: 0, paddingLeft: 0}}>
        <Row>
          <Nav />
        </Row>
        <Filter/>
      </Col>
    </Row>
  )
}

export default Main
