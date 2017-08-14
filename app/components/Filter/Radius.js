import React from 'react'
import { connect } from 'react-redux'
import { putRadius } from '../../reducers/radius-reducer'
import { Input, Icon, Row, Col } from 'react-materialize'

const radius = (props) => {
	const addRadius = props.addRadius
	const changeHandler = (event) => {
	  const newObj = { value: event.target.value, metric: 'imperial' }
		addRadius(newObj)
	}

	return (
		<Row>
			<Input s={4} label="Radius" validate onChange={changeHandler}>
				<Icon>track_changes</Icon></Input>
			<Col s={8} style={{ paddingTop: 25 }}>
				<Input name='on' type='switch' value='1' onLabel='miles' offLabel='km' />
			</Col>
		</Row>
	)
}

const mapStateToProps = storeState => ({
	radius: storeState.radius
})

const mapDispatchToProps = dispatch => ({
	addRadius: (radObj) => dispatch(putRadius(radObj))
})

export default connect(mapStateToProps, mapDispatchToProps)(radius)
