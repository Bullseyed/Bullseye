const UPDATE_RADIUS = 'UPDATE_RADIUS'

export const updateRadius = (radObj) => ({
	type: UPDATE_RADIUS,
	radObj,
})

const radiusReducer = (radius={}, action) => {
	switch(action.type){
		case UPDATE_RADIUS:
			return action.radObj
		default:
			return radius
	}
}

export default radiusReducer
