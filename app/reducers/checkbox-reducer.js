const UPDATE_CHECKBOX = 'UPDATE_CHECKBOX'

const updateCheckbox = (event) => ({
	type: UPDATE_CHECKBOX,
	checkbox: event.target.value,
})

export const putCheckbox = (event) => dispatch => {
	return dispatch(updateCheckbox(event))
}

const checkboxesReducer = (checkboxes=[], action) => {
	switch(action.type){
		case UPDATE_CHECKBOX:
			return [...checkboxes, action.checkbox]
		default:
			return checkboxes
	}
}

export default checkboxesReducer
