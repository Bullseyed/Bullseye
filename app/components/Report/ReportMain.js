import React, { Component } from 'react'
import { Row, Col } from 'react-materialize'
import { connect } from 'react-redux'
import Filter from '../Filter/Main'
import MapContainer from '../Map/MapContainer'
import Nav from '../Nav/Nav'
import HomeBut from './HomeBut'
import BizList from './BizList'
import Location from './Location'
import Zips from './Zips'
import SaveBut from './SaveBut'


const ReportMain = () => {
  return (
    <Row>
      <Col l={3} style={{ paddingRight: 0, paddingLeft: 0, }}>
        <MapContainer />
      </Col>

			<Col l={9} style={{ paddingRight: 0, paddingLeft: 0 }}>
				<Row>  <Nav />  </Row>
				<Row> <Col> <Location /> </Col> </Row>
				<Row> <Col> <Zips /> </Col> </Row>
				<Row>
					<Col s={4}>
						<div style={{ overflow: 'auto', height: 400 }}>
							<BizList />
						</div>
					</Col>
					<Col s={8}>
						<Row>
							<div style={{fill: 'black', height: 400}}>
								Charts
							</div>
						</Row>
					</Col>
				</Row>
				<Row> <Col> <HomeBut /> </Col> <Col> <SaveBut /> </Col> </Row>
				</Col>
		</Row>
	)
}

export default ReportMain
