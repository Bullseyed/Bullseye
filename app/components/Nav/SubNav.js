import React from 'react';
import { Navbar, NavItem } from 'react-materialize';
import Login from './Login'

const SubNav = (props) => {
	return (
		<Navbar>
			<NavItem> <Login /> </NavItem>
			<NavItem> Saved Searches </NavItem>
			<NavItem> Shared with me </NavItem>
			<NavItem> Sign Out </NavItem>
		</Navbar>
	)
}

export default SubNav