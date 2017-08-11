import React from 'react'
import { Navbar, NavItem } from 'react-materialize'

const Nav = (props) => {
	return (
		<Navbar brand='Bullseye' right>
			<NavItem href='get-started.html'>Home</NavItem>
			<NavItem href='components.html'>Saved</NavItem>
		</Navbar>
	)
}

export default Nav