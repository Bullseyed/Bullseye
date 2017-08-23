import React from 'react'
import { Input } from 'react-materialize'
import SubRest from './SubDropdowns/SubRest'
import SubLaund from './SubDropdowns/SubLaund'
import { connect } from 'react-redux'
import { addBType } from '../../reducers/b-type-reducer'
import SubNight from './SubDropdowns/SubNight'

class BusinessDropdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showSubRest: false,
			showSubLaund: false,
			showSubNight: false,
			showSubSalon: false,
		}
	}

	render() {
		const changeHandle = (event) => {
			const val = +event.target.value
			if (val === 2) {
				this.setState({ showSubRest: true, showSubLaund: false, showSubNight: false, showSubSalon: false })
			}
			if (val === 3) {
				this.setState({ showSubRest: false, showSubLaund: true, showSubNight: false, showSubSalon: false})
			}
			if (val === 4) {
				this.setState({ showSubRest: false, showSubLaund: false, showSubNight: true, showSubSalon: false })
			}
			if (val === 5) {
				this.setState({ showSubRest: false, showSubLaund: false, showSubNight: false, showSubSalon: true })
			}
		}
		return (
			<div>
				<Input s={12} type='select' label="Business Type" defaultValue='0' onChange={changeHandle}>
					<option disabled='disabled' value='0'> Select Business </option>
					<option value='2'>Restaurant</option>
					<option value='3'>Laundry</option>
					<option value='4'>Nightlife</option>
					<option value='5'>Salon</option>
				</Input>

				{this.state.showSubRest && <SubRest />}
				{this.state.showSubLaund && <SubLaund />}
				{this.state.showSubNight && <SubNight />}
				{this.state.showSubSalon && <SubSalon />}

			</div>
		)
	}
}

const mapStateToProps = storeState => ({ bType: storeState.bType })
const mapDispatchToProps = dispatch => ({addBType: typeStr => dispatch(addBType(typeStr))})
export default connect(mapStateToProps, mapDispatchToProps)(BusinessDropdown)
