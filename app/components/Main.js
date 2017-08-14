import React, { Component } from 'react'
import { Row, Col } from 'react-materialize'

import Filter from './Filter'
import MapContainer from './MapContainer'
import Nav from './Nav'

const Main = (props) => {
  return (
    <Row>
      <Col l={8} style={{paddingRight:0, paddingLeft: 0,}}>
          <MapContainer />
      </Col>

      <Col l={4} style={{paddingRight:0, paddingLeft: 0}}>
        <Nav />
        <Filter />
      </Col>
    </Row>
  )
}

export default Main
