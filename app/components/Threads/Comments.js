import React from 'react'
import { connect } from 'react-redux'
import { Collection, CollectionItem } from 'react-materialize'

const Comments = props => {
	
	return (
		<div>
			{props.comments.map(comment=>{
				return comment.threadId===props.thread.id 
				? <div> <div key={comment.id}> {comment.comment}  </div><hr/> </div>
				: null
			})}
		</div>
	)
}

const mapStateToProps = storeState => ({
	comments: storeState.comments
})

export default connect(mapStateToProps,null)(Comments)