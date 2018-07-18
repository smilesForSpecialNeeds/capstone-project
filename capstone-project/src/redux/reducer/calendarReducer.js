import {
	FETCH_CALENDAR_SUCCESS,
	FETCH_CALENDAR_FAILED,
	ADD_CALENDAR_FAILED,
	ADD_CALENDAR_SUCCESS,
	DELETE_CALENDAR_FAILED,
	DELETE_CALENDAR_SUCCESS,
	UPDATE_CALENDAR_SUCCESS,
	UPDATE_CALENDAR_FAILED
} from '../actions/calendar'

let initialState = []

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_CALENDAR_SUCCESS:
			return [...action.payload.data]

		case FETCH_CALENDAR_FAILED:
			return action.payload
		case ADD_CALENDAR_SUCCESS:
			return [...state, action.payload.data]
		case ADD_CALENDAR_FAILED:
			return action.payload
		case DELETE_CALENDAR_SUCCESS:
			const calendarId = action.payload._id
			return state.filter(calendar => calendar._id !== calendarId)
		case DELETE_CALENDAR_FAILED:
			return action.payload
		case UPDATE_CALENDAR_SUCCESS:
			return action.payload
		case UPDATE_CALENDAR_FAILED:
			return action.payload
		default:
			return state
	}
}
