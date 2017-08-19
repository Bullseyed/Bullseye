const MARK_BULLSEYE = "MARK_BULLSEYE"

export const markBullseye = (coordsArr) => {
	return {
		type: MARK_BULLSEYE,
		coordsArr
	}
}

const bullseyeReducer = (coords=[], action) => {
	switch(action.type){
		case MARK_BULLSEYE:
			return action.coordsArr
		default:
			return coords
	}
}

export default bullseyeReducer
