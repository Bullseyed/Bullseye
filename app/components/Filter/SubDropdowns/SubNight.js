import React from 'react'
import { Input } from 'react-materialize'
import { connect } from 'react-redux'
import { addBType } from '../../../reducers/b-type-reducer'

const SubNight = (props) => {
	const changeHandler = (event) => {
		let value = event.target.value
		let str = ''
		let restStr = ''
		if (value == 0) str = 'nightlife'
		if (value == 1) str = 'beergardens'
		if (value == 2) str = 'sportsbars'
		if (value == 3) str = 'speakeasies'
		if (value == 4) str = 'irish_pubs'
		if (value == 5) str = 'hookah_bars'
		if (value == 6) str = 'lounges'
		if (value == 7) str = 'wine_bars'
		if (value == 8) str = 'cocktailbars'
		if (value == 9) str = 'champagne_bars'
		if (value == 10) str = 'divebars'
		props.addBType(str)
	}

	return (
		<Input s={12} type='select' label="Nightlife Type" defaultValue='0' onChange={changeHandler}>
						<option value='0' disabled='disabled'> Select Nightlife Type </option>
			<option value='1'>Beer Garden</option>
			<option value='2'>Sports Bar</option>
			<option value='3'>Speakeasy</option>
			<option value='4'>Irish Pub</option>
			<option value='5'>Hookah</option>
			<option value='6'>Lounge</option>
			<option value='7'>Wine Bar</option>
			<option value='8'>Cocktail Bar</option>
			<option value='9'>Champagne Bar</option>
			<option value='10'>Dive Bar</option>
		</Input>
	)
}
const mapStateToProps = storeState => ({ bType: storeState.bType })
const mapDispatchToProps = dispatch => ({ addBType: typeStr => dispatch(addBType(typeStr)) })
export default connect(mapStateToProps, mapDispatchToProps)(SubNight)
