import React from 'react'
import { connect } from 'react-redux'

const Comments = props => {
	
	return (
		<div>
			{props.comments.map(comment=>{
				return comment.threadId===props.thread.id 
				? <div key={comment.id}> <b>- </b> {comment.comment} </div> 
				: null
			})}
		</div>
	)
}

const mapStateToProps = storeState => ({
	comments: storeState.comments
})

export default connect(mapStateToProps,null)(Comments)