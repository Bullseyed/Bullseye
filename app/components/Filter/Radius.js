import React from 'react'
import { connect } from 'react-redux'
import { putRadius } from '../../reducers/radius-reducer'
import { Input, Icon } from 'react-materialize'

const radius = (props) => {
	const addRadius = props.addRadius
	const changeHandler = (event) => {
		const newObj = {value: event.target.value, metric: 'imperial'}
		addRadius(newObj)
	}

	return (
		<Input s={4} label="Radius" validate onChange={changeHandler}><Icon>track_changes</Icon></Input>
	)
}

const mapStateToProps = storeState => ({
	radius: storeState.radius
})

const mapDispatchToProps = dispatch =>({
	addRadius: (radObj) => dispatch(putRadius(radObj))
})

export default connect(mapStateToProps, mapDispatchToProps)(radius)