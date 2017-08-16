import React, { Component } from 'react'
import { Row, Col } from 'react-materialize'
import { connect } from 'react-redux'
import Filter from '../Filter/Main'
import MapContainer from '../Map/MapContainer'
import Nav from '../Nav/Nav'
import HomeBut from './HomeBut'
import Piechart from './PieChart'



const ReportMain = () => {
	return (

				<Piechart />

	)
}


const mapStateToProps = storeState => ({ bType: storeState.bType })

const mapDispatchToProps = dispatch => ({ addBType: typeStr => dispatch(putBType(typeStr)) })

export default connect(mapStateToProps, mapDispatchToProps)(ReportMain)
