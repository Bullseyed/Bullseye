import React from 'react'
import { Navbar, NavItem, Icon } from 'react-materialize'
import SubNav from './SubNav'

class Nav extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			showSubNav: false,
		}
		this.toggleSubNav = this.toggleSubNav.bind(this)
	}

	toggleSubNav(){
		this.state.showSubNav ? this.setState({showSubNav: false}) : this.setState({showSubNav: true})
	}

	render() {
		return (
			<div>
				<Navbar brand='Bullseye' right>
					<NavItem onClick={this.toggleSubNav}>
						<Icon> account_circle </Icon>
					</NavItem>
				</Navbar>
				{this.state.showSubNav && <SubNav />}
			</div>

		)
	}
}

export default Nav