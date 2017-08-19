import React from 'react';
import { connect } from 'react-redux';

import { setZoom } from '../../reducers/map-reducer';
import { updateRadius } from '../../reducers/radius-reducer';
import { Input, Row, Col } from 'react-materialize';
import { switchMeasurement } from '../../reducers/report';

const radius = (props) => {
	// let metric = 'mile'
	// const handleMetric = (event)=>{
	// 	if (metric ==='mile') metric = 'km'
	// 		else {
	// 			metric = 'miles'
	// 		}
	// }

	const changeHandler = (event) => {
		function getMetersFromMiles(miles) {
			return miles * 1609.344;
		}
		function getMetersFromKM(km) {
			return km * 1000;
		}

		const inputRadius = +document.getElementById('radiusField').value

		if (inputRadius > 0 && inputRadius < 0.5) {
			props.setZoom(14);
		}
		if (inputRadius >= 0.5 && inputRadius < 1) {
			props.setZoom(13)
		}
		if (inputRadius >= 2 && inputRadius < 5) {
			props.setZoom(12);
		}
		if (inputRadius >= 5 && inputRadius < 20) {
			props.setZoom(10)
		}
		if (inputRadius >= 20 && inputRadius < 100) {
			props.setZoom(8)
		}
		if (inputRadius >= 100) {
			props.setZoom(7)
		}

		const metric = document.getElementById('metric-switch').checked ? getMetersFromKM(+document.getElementById('radiusField').value) : getMetersFromMiles(+document.getElementById('radiusField').value)
		props.updateRadius(metric);

		document.getElementById('metric-switch').checked ? props.switchMeasurement('km') : props.switchMeasurement('miles');

	}

	return (
		<Row>
			<Col s={4}>
				<Input id='radiusField' label="Radius" validate onChange={changeHandler}></Input>
			</Col>
			<Col s={8} style={{ paddingTop: 25 }}>
				<Input name='on' type='switch' id="metric-switch" value='1' onLabel='km' offLabel='miles' onChange={changeHandler} />
			</Col>
		</Row>
	)
}

const mapStateToProps = storeState => ({
	radius: storeState.radius
})

const mapDispatchToProps = dispatch => ({
	updateRadius: (radObj) => dispatch(updateRadius(radObj)),
	switchMeasurement: (str) => dispatch(switchMeasurement(str)),
	setZoom: (zoom) => dispatch(setZoom(zoom))
})

export default connect(mapStateToProps, mapDispatchToProps)(radius)
