const GET_B_TYPE = 'GET_B_TYPE'

const getBType = (typeStr) => ({
	type: GET_B_TYPE,
	typeStr
})

export const putBType = (typeStr) => dispatch => {
	return dispatch(getBType(typeStr))
}

const bTypeReducer = (bType = '', action) => {
	switch (action.type) {
		case GET_B_TYPE:
			return action.typeStr
		default:
			return bType
	}
}

export default bTypeReducer


