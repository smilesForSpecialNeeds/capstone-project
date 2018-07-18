import {
	FETCH_TESTIMONIAL_SUCCESS,
	FETCH_TESTIMONIAL_FAILED,
	ADD_TESTIMONIAL_SUCCESS,
	ADD_TESTIMONIAL_FAILED,
	DELETE_TESTIMONIAL_SUCCESS,
	DELETE_TESTIMONIAL_FAILED,
	UPDATE_TESTIMONIAL_SUCCESS,
	UPDATE_TESTIMONIAL_FAILED
} from '../actions/testimonial'

let initialState = []

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_TESTIMONIAL_SUCCESS:
			return [...action.payload.data]

		case FETCH_TESTIMONIAL_FAILED:
			return action.payload
		case ADD_TESTIMONIAL_SUCCESS:
			return [...state, action.payload.data]
		case ADD_TESTIMONIAL_FAILED:
			return action.payload
		case DELETE_TESTIMONIAL_SUCCESS:
			const testimonialId = action.payload._id
			return state.filter(testimonial => testimonial._id !== testimonialId)
		case DELETE_TESTIMONIAL_FAILED:
			return action.payload
		case UPDATE_TESTIMONIAL_SUCCESS:
			return action.payload
		case UPDATE_TESTIMONIAL_FAILED:
			return action.payload
		default:
			return state
	}
}
