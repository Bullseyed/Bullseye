import React from 'react'
import { Button } from 'react-materialize'
import { postComment } from '../../reducers/comment-reducer'
import { connect } from 'react-redux'

const CommentForm = (props) => {
	
	const submitComment = () => {
		const commentObj = {
			comment: document.getElementById('commentField').value,
			threadId: props.thread.id,
		}
		props.postComment(commentObj)
	}
	
	return (
		<div>
			<textarea id='commentField' rows="10" cols="50">
			</textarea>
			<Button onClick={submitComment}> Submit </Button>
		</div>
	)
}

const mapDispatchToProps = dispatch => ({
	postComment: (commentObj) => dispatch(postComment(commentObj))
})
export default connect (null, mapDispatchToProps)(CommentForm)