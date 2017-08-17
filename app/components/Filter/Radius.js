import React from 'react'
import { connect } from 'react-redux'
import { updateRadius } from '../../reducers/radius-reducer'
import { Input, Row, Col } from 'react-materialize'

const radius = (props) => {
	const changeHandler = (event) => {

	  const newObj = { value: +event.target.value, metric: 'imperial' }
		props.updateRadius(newObj)
	}

	return (
		<Row>
			<Col s={4}>
			<Input label="Radius" validate onChange={changeHandler}></Input>
			</Col>
			<Col s={8} style={{ paddingTop: 25 }}>
				<Input name='on' type='switch' value='1' onLabel='km' offLabel='miles' />
			</Col>
		</Row>
	)
}

const mapStateToProps = storeState => ({
	radius: storeState.radius
})

const mapDispatchToProps = dispatch => ({
	updateRadius: (radObj) => dispatch(updateRadius(radObj))
})

export default connect(mapStateToProps, mapDispatchToProps)(radius)
