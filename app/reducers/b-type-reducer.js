const ADD_B_TYPE = 'ADD_B_TYPE'

export const addBType = (typeStr) => ({
	type: ADD_B_TYPE,
	typeStr
})

const bTypeReducer = (bType = '', action) => {
	switch (action.type) {
		case ADD_B_TYPE:
			return action.typeStr
		default:
			return bType
	}
}

export default bTypeReducer
