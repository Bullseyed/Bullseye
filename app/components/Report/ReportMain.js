import React, { Component } from 'react'
import { Row, Col } from 'react-materialize'
import { connect } from 'react-redux'
import Filter from '../Filter/Main'
import MapContainer from '../Map/MapContainer'
import Nav from '../Nav/Nav'
import HomeBut from './HomeBut'


const ReportMain = () => {
	return (
		<Row>
			<Col l={3} style={{ paddingRight: 0, paddingLeft: 0, }}>
				<MapContainer />
			</Col>

			<Col l={9} style={{ paddingRight: 0, paddingLeft: 0 }}>
				<Row>
					<Nav />
				</Row>
				<HomeBut/>
			</Col>
		</Row>
	)
}

export default ReportMain