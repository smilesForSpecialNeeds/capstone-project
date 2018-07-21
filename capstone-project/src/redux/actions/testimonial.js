import axios from 'axios'

export const FETCH_TESTIMONIAL_SUCCESS = 'FETCH_TESTIMONIAL_SUCCESS'
export const FETCH_TESTIMONIAL_FAILED = 'FETCH_TESTIMONIAL_FAILED'
export const ADD_TESTIMONIAL_SUCCESS = 'ADD_TESTIMONIAL_SUCCESS'
export const ADD_TESTIMONIAL_FAILED = 'ADD_TESTIMONIAL_FAILED'
export const DELETE_TESTIMONIAL_SUCCESS = 'DELETE_TESTIMONIAL_SUCCESS'
export const DELETE_TESTIMONIAL_FAILED = 'DELETE_TESTIMONIAL_FAILED'
export const UPDATE_TESTIMONIAL_SUCCESS = 'UPDATE_TESTIMONIAL_SUCCESS'
export const UPDATE_TESTIMONIAL_FAILED = 'UPDATE_TESTIMONIAL_FAILED'

export const fetchTestimonial = () => {
	return async dispatch => {
		try {
			let authHeader = localStorage.getItem('admin')
			let testimonial = await axios.get('http://localhost:8000/api/testimonial', {
				headers: {
					Authorization: authHeader
				}
			})
			dispatch({
				type: FETCH_TESTIMONIAL_SUCCESS,
				payload: testimonial
			})
		} catch (err) {
			dispatch({
				type: FETCH_TESTIMONIAL_FAILED,
				payload: err
			})
		}
	}
}
export const addTestimonial = testimonial => {
	return async dispatch => {
		try {
			let authHeader = localStorage.getItem('admin')
			let newTestimonial = await axios.post(`http://localhost:8000/api/testimonial`,
				testimonial, {
					headers: {
						Authorization: authHeader
					}
				})
			dispatch({
				type: ADD_TESTIMONIAL_SUCCESS,
				payload: newTestimonial
			})
		} catch (err) {
			dispatch({
				type: ADD_TESTIMONIAL_FAILED,
				payload: err
			})
		}
	}
}
export const deleteTestimonial = id => {
	return async dispatch => {
		let authHeader = localStorage.getItem('admin')
		try {
			let newTestimonial = await axios.delete(`http://localhost:8000/api/testimonial/${id}`, {
				headers: {
					Authorization: authHeader
				}
			})
			dispatch({
				type: DELETE_TESTIMONIAL_SUCCESS,
				payload: newTestimonial.data[0]
			})
		} catch (err) {
			dispatch({
				type: DELETE_TESTIMONIAL_FAILED,
				payload: err
			})
		}
	}
}
export const updateTestimonial = (testimonial, id) => {
	return async dispatch => {
		let authHeader = localStorage.getItem('admin')
		try {
			let testimonialUpdate = await axios.patch(
				`http://localhost:8000/api/testimonial/edit/${id}`, {
					headers: {
						Authorization: authHeader
					}
				})

			dispatch({
				type: UPDATE_TESTIMONIAL_SUCCESS,
				payload: testimonialUpdate.data
			})
		} catch (err) {
			dispatch({
				type: UPDATE_TESTIMONIAL_FAILED,
				payload: err
			})
		}
	}
}