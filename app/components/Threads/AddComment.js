import React from 'react'
import { Col, Row, Modal, Button } from 'react-materialize'
import CommentForm from './CommentForm'

const AddComment = ({ thread }) => {
	return (
		<Modal
			header='Add Comment'
			trigger={<Button waves='light'>Add Comment</Button>}>
			<CommentForm thread={thread}/>
		</Modal>
	)
}

export default AddComment