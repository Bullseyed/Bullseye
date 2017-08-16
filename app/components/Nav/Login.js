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
			<p></p>
		<a href="/api/auth"><Button> Log in with Google </Button></a>
		</Modal>
	)
}

export default Login
