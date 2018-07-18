import {
	FETCH_PROVIDER_SUCCESS,
	FETCH_PROVIDER_FAILED,
	ADD_PROVIDER_SUCCESS,
	ADD_PROVIDER_FAILED,
	DELETE_PROVIDER_FAILED,
	DELETE_PROVIDER_SUCCESS,
	UPDATE_PROVIDER_FAILED,
	UPDATE_PROVIDER_SUCCESS
} from '../actions/provider'

let initialState = []

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_PROVIDER_SUCCESS:
			return [...action.payload.data]

		case FETCH_PROVIDER_FAILED:
			return action.payload
		case ADD_PROVIDER_SUCCESS:
			return [...state, action.payload.data]
		case ADD_PROVIDER_FAILED:
			return action.payload
		case DELETE_PROVIDER_SUCCESS:
			const providerId = action.payload._id
			return state.filter(provider => provider._id !== providerId)
		case DELETE_PROVIDER_FAILED:
			return action.payload
		case UPDATE_PROVIDER_SUCCESS:
			return action.payload
		case UPDATE_PROVIDER_FAILED:
			return action.payload
		default:
			return state
	}
}
