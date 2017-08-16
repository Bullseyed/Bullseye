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
		this.reload = this.reload.bind(this)
	}

	toggleSubNav(){
		this.state.showSubNav ? this.setState({showSubNav: false}) : this.setState({showSubNav: true})
	}
	reload(){
		location.reload()
	}

	render() {
		return (
			<div>
				<Navbar brand={<div><Icon large>gps_fixed</Icon> <h> Bullseye </h></div>} right>
				<NavItem onClick={this.reload}>
						<Icon small> cached </Icon>
					</NavItem>
					<NavItem onClick={this.toggleSubNav}>
						<Icon small> account_circle </Icon>
					</NavItem>
				</Navbar>
				{this.state.showSubNav && <SubNav />}
			</div>

		)
	}
}

export default Nav