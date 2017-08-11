import React, { Component } from 'react'
import { Row, Col } from 'react-materialize'

import Filter from './Filter'
import Map from './Map'
import Nav from './Nav'

const Main = (props) => {
  return (
    <div>

      <Row>
        <Col l={12}>
          <Nav />
        </Col>
      </Row>

      <Row>
        <Col l={8}>
          <Map 
            containerElement={<div style={{height:100+'%'}}/>}
            mapElement={<div style={{height:100+'%'}}/>}
          />
        </Col>
        <Col l={4}>
          <Filter />
        </Col>
      </Row>

    </div>
  )
}

export default Main
