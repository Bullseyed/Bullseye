import React, { Component } from 'react'
import { Row, Col } from 'react-materialize'

import Filter from './Filter/Main'
import MapContainer from './Map/MapContainer'
<<<<<<< HEAD
import Nav from './Nav'
import Chart from './Report/Chart'
=======
import Nav from './Nav/Nav'
>>>>>>> d31b5c0b00854e70395ac7c1910ae6063dbeee37

const Main = (props) => {
  return (
    <Row>
      <Col l={8} style={{ paddingRight: 0, paddingLeft: 0, }}>
        <MapContainer />
      </Col>

<<<<<<< HEAD
      <Col l={4} style={{paddingRight:0, paddingLeft: 0}}>
        <Row><Nav /></Row>
        <Filter />
        <Row><Chart /></Row>
=======
      <Col l={4} style={{ paddingRight: 0, paddingLeft: 0}}>
        <Row>
          <Nav />
        </Row>
        <Filter/>
>>>>>>> d31b5c0b00854e70395ac7c1910ae6063dbeee37
      </Col>
    </Row>
  )
}

export default Main
