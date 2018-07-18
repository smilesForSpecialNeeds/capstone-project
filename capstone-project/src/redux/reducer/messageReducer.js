import {
	FETCH_MESSAGE_SUCCESS,
	FETCH_MESSAGE_FAILED,
	ADD_MESSAGE_SUCCESS,
	ADD_MESSAGE_FAILED,
	DELETE_MESSAGE_SUCCESS,
	DELETE_MESSAGE_FAILED,
	UPDATE_MESSAGE_SUCCESS,
	UPDATE_MESSAGE_FAILED
} from '../actions/message'

let initialState = []

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_MESSAGE_SUCCESS:
			return [...action.payload.data]

		case FETCH_MESSAGE_FAILED:
			return action.payload
		case ADD_MESSAGE_SUCCESS:
			return [...state, action.payload.data]
		case ADD_MESSAGE_FAILED:
			return action.payload
		case DELETE_MESSAGE_SUCCESS:
			const messageId = action.payload.id
			return state.filter(message => message.id !== messageId)
		case DELETE_MESSAGE_FAILED:
			return action.payload
		case UPDATE_MESSAGE_SUCCESS:
			return action.payload
		case UPDATE_MESSAGE_FAILED:
			return action.payload
		default:
			return state
	}
}
