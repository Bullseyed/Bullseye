import React from 'react'
import { Button, Row, Input } from 'react-materialize'
import { postComment } from '../../reducers/comment-reducer'
import { connect } from 'react-redux'

class CommentForm extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			formValue: ''
		}
	}

	render() {
		const submitComment = () => {
			const commentObj = {
				comment: this.state.formValue,
				threadId: this.props.thread.id,
			}
			this.props.postComment(commentObj)
			this.setState({formValue: ''})
		}
		const onChange = (event) => {
			this.setState({formValue: event.target.value})
		}

		return (
			<div>
				<Row>
					<Input
						id='commentField'
						type='textarea'
						s={12}
						label="Comment"
						value = {this.state.formValue}
						onChange={onChange}
					/>
				</Row>
				<Button onClick={submitComment}> Submit </Button>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	postComment: (commentObj) => dispatch(postComment(commentObj))
})
export default connect(null, mapDispatchToProps)(CommentForm)