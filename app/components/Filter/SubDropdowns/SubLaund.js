import React from 'react'
import { Input } from 'react-materialize'
import { connect } from 'react-redux'
import { putBType } from '../../../reducers/b-type-reducer'

const SubLaund = (props) => {
	const changeHandler = (event) => {
		let value = event.target.value
		let str = ''
		if (value == 0) str = 'laundry'
		if (value == 1) str = 'dryclean'
		if (value == 2) str = 'laundromat'
		props.addBType(str)
	}
	return (
		<Input s={12} type='select' label="Laundry Type" defaultValue='0' onChange={changeHandler}>
			<option value='0'> All </option>
			<option value='1'>Dry Cleaning</option>
			<option value='2'>Laundromat</option>
		</Input>
	)
}

const mapStateToProps = storeState => ({ bType: storeState.bType })
const mapDispatchToProps = dispatch => ({ addBType: typeStr => dispatch(putBType(typeStr)) })
export default connect(mapStateToProps, mapDispatchToProps)(SubLaund)