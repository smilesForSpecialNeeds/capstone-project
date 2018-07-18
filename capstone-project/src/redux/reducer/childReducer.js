import {
	FETCH_CHILD_SUCCESS,
	FETCH_CHILD_FAILED,
	ADD_CHILD_SUCCESS,
	ADD_CHILD_FAILED,
	DELETE_CHILD_SUCCESS,
	DELETE_CHILD_FAILED,
	UPDATE_CHILD_SUCCESS,
	UPDATE_CHILD_FAILED
} from '../actions/child'

let initialState = []

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_CHILD_SUCCESS:
			return [...action.payload.data]

		case FETCH_CHILD_FAILED:
			return action.payload
		case ADD_CHILD_SUCCESS:
			return [...state, action.payload.data]
		case ADD_CHILD_FAILED:
			return action.payload
		case DELETE_CHILD_SUCCESS:
    
      const childId = action.payload._id

			return state.filter(child => child._id != childId)

		case DELETE_CHILD_FAILED:
			return action.payload
		case UPDATE_CHILD_SUCCESS:
			return  action.payload
		case UPDATE_CHILD_FAILED:
			return action.payload
		default:
			return state
	}
}
