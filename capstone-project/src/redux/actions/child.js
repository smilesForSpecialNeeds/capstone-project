import axios from 'axios'

export const FETCH_CHILD_SUCCESS = 'FETCH_CHILD_SUCCESS'
export const FETCH_CHILD_FAILED = 'FETCH_CHILD_FAILED'
export const ADD_CHILD_SUCCESS = 'ADD_CHILD_SUCCESS'
export const ADD_CHILD_FAILED = 'ADD_CHILD_FAILED'
export const DELETE_CHILD_SUCCESS = 'DELETE_CHILD_SUCCESS'
export const DELETE_CHILD_FAILED = 'DELETE_CHILD_FAILED'
export const UPDATE_CHILD_SUCCESS = 'UPDATE_CHILD_SUCCESS'
export const UPDATE_CHILD_FAILED = 'UPDATE_CHILD_FAILED'

export const fetchChild = () => {
	return async dispatch => {
		try {
			let authHeader = localStorage.getItem('admin')
			let child = await axios.get('http://localhost:8000/api/child', {
				headers: {
					Authorization: authHeader
				}
			})
			dispatch({
				type: FETCH_CHILD_SUCCESS,
				payload: child
			})
		} catch (err) {
			dispatch({
				type: FETCH_CHILD_FAILED,
				payload: err
			})
		}
	}
}
export const addChild = child => {
	return async dispatch => {
		try {
			let authHeader = localStorage.getItem('admin')
			let newChild = await axios.post(`http://localhost:8000/api/child`, child, {
				headers: {
					Authorization: authHeader
				}
			})
			dispatch({
				type: ADD_CHILD_SUCCESS,
				payload: newChild
			})
		} catch (err) {
			dispatch({
				type: ADD_CHILD_FAILED,
				payload: err
			})
		}
	}
}
export const deleteChild = id => {
	return async dispatch => {
		let authHeader = localStorage.getItem('admin')
		try {
			let newChild = await axios.delete(`http://localhost:8000/api/child/${id}`, {
				headers: {
					Authorization: authHeader
				}
			})
			dispatch({
				type: DELETE_CHILD_SUCCESS,
				payload: newChild.data
			})

		} catch (err) {
			dispatch({
				type: DELETE_CHILD_FAILED,
				payload: err
			})
		}
	}
}
export const updateChild = (child, id) => {
	return async dispatch => {
		let authHeader = localStorage.getItem('admin')
		try {
			let childUpdate = await axios.patch(
				`http://localhost:8000/api/child/edit/${id}`,
				child, {
					headers: {
						Authorization: authHeader
					}
				}
			)
			dispatch({
				type: UPDATE_CHILD_SUCCESS,
				payload: childUpdate.data
			})
		} catch (err) {
			dispatch({
				type: UPDATE_CHILD_FAILED,
				payload: err
			})
		}
	}
}