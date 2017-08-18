const UPDATE_RADIUS = 'UPDATE_RADIUS'

export const updateRadius = (radInt) => ({
	type: UPDATE_RADIUS,
	radInt,
})

const radiusReducer = (radius=0, action) => {
	switch(action.type){
		case UPDATE_RADIUS:
			return action.radInt
		default:
			return radius
	}
}

export default radiusReducer
