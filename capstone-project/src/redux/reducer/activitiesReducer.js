import {
	FETCH_ACTIVITIES_SUCCESS,
	FETCH_ACTIVITIES_FAILED,
	ADD_ACTIVITIES_SUCCESS,
	ADD_ACTIVITIES_FAILED,
	DELETE_ACTIVITIES_SUCCESS,
	DELETE_ACTIVITIES_FAILED,
	UPDATE_ACTIVITIES_SUCCESS,
	UPDATE_ACTIVITIES_FAILED
} from '../actions/activities'

let initialState = []

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_ACTIVITIES_SUCCESS:
			return [...action.payload.data]

		case FETCH_ACTIVITIES_FAILED:
			return action.payload
		case ADD_ACTIVITIES_SUCCESS:
			return [...state, action.payload.data]
		case ADD_ACTIVITIES_FAILED:
			return action.payload
		case DELETE_ACTIVITIES_SUCCESS:
			const activityId = action.payload._id
			return state.filter(activity => activity._id !== activityId)
		case DELETE_ACTIVITIES_FAILED:
			return action.payload
		case UPDATE_ACTIVITIES_SUCCESS:
			return action.payload
		case UPDATE_ACTIVITIES_FAILED:
			return action.payload
		default:
			return state
	}
}