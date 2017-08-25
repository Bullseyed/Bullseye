import React from 'react'
import { Input } from 'react-materialize'
import { connect } from 'react-redux'
import { addBType } from '../../../reducers/b-type-reducer'

const SubBeauty = (props) => {
	const changeHandler = (event) => {
		let value = event.target.value
		let str = ''
		let restStr = ''
		if (value == 0) str = 'beautysvc'
		if (value == 1) str = 'hairstylists'
		if (value == 2) str = 'menshair'
		if (value == 3) str = 'piercing'
		if (value == 4) str = 'othersalons'
		if (value == 5) str = 'skincare'
		if (value == 6) str = 'tanning'
		props.addBType(str)
	}

	return (
		<Input s={12} type='select' label="Beauty Type" defaultValue='0' onChange={changeHandler}>
			<option value='0' disabled='disabled'> Select Beauty Type </option>
			<option value='1'>Hair Stylist </option>
			<option value='2'>Men's Hair Stylist </option>
			<option value='3'>Piercing</option>
			<option value='4'>Nail Salon</option>
			<option value='5'>Skin Care</option>
			<option value='6'>Tanning</option>
		</Input>
	)
}
const mapStateToProps = storeState => ({ bType: storeState.bType })
const mapDispatchToProps = dispatch => ({ addBType: typeStr => dispatch(addBType(typeStr)) })
export default connect(mapStateToProps, mapDispatchToProps)(SubBeauty)
