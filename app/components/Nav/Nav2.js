import React from 'react'
import { Navbar, NavItem, Icon } from 'react-materialize'
import { connect } from 'react-redux'

import SubNav from './SubNav'
import { retrieveLoggedInUser } from '../../reducers/auth'

class Nav extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			showSubNav: false,
		}
	}

	componentDidMount() {
   this.props.retrieveUser();
  }

	render() {
		console.log(location)

		const toggleSubNav = () => this.state.showSubNav ? this.setState({ showSubNav: false }) : this.setState({ showSubNav: true })
		const reload = () => location.reload()

		return (
			<div>
				<Navbar style={{backgroundColor:'red'}} brand={<div><Icon large>gps_fixed</Icon> <h> Bullseye </h></div>} right>
					<NavItem onClick={reload}>
						<Icon small> cached </Icon>
					</NavItem>
					{location.pathname === '/business'
					? <NavItem href="threads">
							Community View
						</NavItem>
						: location.pathname === '/threads'
							? <NavItem href="/business">
									Business View
								</NavItem>
							: null
					}
					<NavItem onClick={toggleSubNav}>
						<Icon small> account_circle </Icon>
					</NavItem>
				</Navbar>
				{this.state.showSubNav && <SubNav />}
			</div>
		)
	}
}

const mapDispatch = dispatch => ({
  retrieveUser: () => dispatch(retrieveLoggedInUser()),
})

export default connect(null, mapDispatch)(Nav);
