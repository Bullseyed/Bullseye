import React from 'react';
import { Navbar, NavItem } from 'react-materialize';
import Login from './Login';
import { connect } from 'react-redux';
import { logout} from '../../reducers/auth';

const SubNav = (props) => {
	return (
		props.currentUser ?
		<Navbar>
			<NavItem> Saved Searches </NavItem>
			<NavItem> Shared with me </NavItem>
			<NavItem onClick={props.logout}> Sign Out </NavItem>
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

const mapDispatch = { logout };

export default connect(mapState, mapDispatch)(SubNav);
