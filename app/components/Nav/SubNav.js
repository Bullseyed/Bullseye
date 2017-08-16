import React from 'react';
import { Navbar, NavItem } from 'react-materialize';
import Login from './Login';
import { connect } from 'react-redux';

const SubNav = (props) => {
	return (
		props.currentUser ?
		<Navbar>
			<NavItem> Saved Searches </NavItem>
			<NavItem> Shared with me </NavItem>
			<NavItem> Sign Out </NavItem>
		</Navbar>
		:
		<Navbar>
			<NavItem> <Login /> </NavItem>
		</Navbar>
	);
};

const mapState = ({ currentUser }) => ({
	currentUser
});

export default connect(mapState)(SubNav);
