import React from 'react'
import { Navbar, NavItem, Icon } from 'react-materialize'
import SubNav from './SubNav'

class Nav extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			showSubNav: false,
		}
	}

	render() {

		const toggleSubNav = () => this.state.showSubNav ? this.setState({ showSubNav: false }) : this.setState({ showSubNav: true })
		const reload = () => location.reload()

		return (
			<div>
				<Navbar brand={<div><Icon large>gps_fixed</Icon> <h> Bullseye </h></div>} right>
					<NavItem onClick={reload}>
						<Icon small> cached </Icon>
					</NavItem>
					<NavItem onClick={toggleSubNav}>
						<Icon small> account_circle </Icon>
					</NavItem>
				</Navbar>
				{this.state.showSubNav && <SubNav />}
			</div>
		)
	}
}

export default Nav
