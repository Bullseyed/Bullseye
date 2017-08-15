import React from 'react'
import { Modal, Button, Icon } from 'react-materialize'

const Login = () => {
	
	const loginButton = () =>{
		console.log('firing')
	}

	return (
		<Modal
			header='Log in with Gmail'
			trigger={<h>Log in </h>}>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.</p>
			<Button onClick = {loginButton}> Log in </Button>
		</Modal>
	)
}

export default Login