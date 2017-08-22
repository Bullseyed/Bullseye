import React, { Component } from 'react'
import { Row, Col } from 'react-materialize'
import { connect } from 'react-redux'
import Filter from '../Filter/Main'
import MapContainer from '../Map/MapContainer'
import Nav from '../Nav/Nav'
import SavedList from './SavedList'

const SavedReportsMain = (props) => {

    return (
      <Row>
        <Col l={6} style={{ paddingRight: 0, paddingLeft: 0}}>
          <MapContainer />
        </Col>

        <Col l={6} style={{ paddingRight: 0, paddingLeft: 0, height: '100%' }}>
          <Row>
            <Nav />
          </Row>
					<Row>
						<SavedList/>
					</Row>
        </Col>
      </Row>
    )
}

export default SavedReportsMain