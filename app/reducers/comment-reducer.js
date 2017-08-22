import axios from 'axios'

const GET_COMMENTS = 'GET_COMMENTS'
const ADD_COMMENT = 'ADD_COMMENT'

const getComments = (commentsList) => ({
	type: GET_COMMENTS,
	commentsList
})

const addComment = commentObj => ({
	type: ADD_COMMENT,
	commentObj
})

export const fetchComments = () => dispatch => {
	axios.get('/api/comments')
	.then(res=>res.data)
	.then(comments=>dispatch(getComments(comments)))
}

export const postComment = (commentObj) => dispatch => {
	axios.post('/api/comments', commentObj)
	.then(res=>res.data)
	.then(newComment => dispatch(addComment(newComment)))
}

function commentReducer(comments=[], action) {
	switch (action.type){
		case GET_COMMENTS:
			return action.commentsList
		case ADD_COMMENT:
			return comments.concat(action.commentObj)
		default:
			return comments;
	}
}

export default commentReducer
