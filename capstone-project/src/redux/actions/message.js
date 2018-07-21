import axios from 'axios'

export const FETCH_MESSAGE_SUCCESS = 'FETCH_MESSAGE_SUCCESS'
export const FETCH_MESSAGE_FAILED = 'FETCH_MESSAGE_FAILED'
export const ADD_MESSAGE_SUCCESS = 'ADD_MESSAGE_SUCCESS'
export const ADD_MESSAGE_FAILED = 'ADD_MESSAGE_FAILED'
export const DELETE_MESSAGE_SUCCESS = 'DELETE_CALENDAR_SUCCESS'
export const DELETE_MESSAGE_FAILED = 'DELETE_MESSAGE_FAILED'
export const UPDATE_MESSAGE_SUCCESS = 'UPDATE_MESSAGE_SUCCESS'
export const UPDATE_MESSAGE_FAILED = 'UPDATE_MESSAGE_FAILED'

export const fetchMessage = () => {
	return async dispatch => {
		try {
			let authHeader = localStorage.getItem('admin')
			let message = await axios.get('http://localhost:8000/api/message', {
				headers: {
					Authorization: authHeader
				}
			})

			dispatch({
				type: FETCH_MESSAGE_SUCCESS,
				payload: message
			})
		} catch (err) {
			dispatch({
				type: FETCH_MESSAGE_FAILED,
				payload: err
			})
		}
	}
}
export const addMessage = message => {
	return async dispatch => {
		try {
			let authHeader = 'Bearer ' + JSON.parse(localStorage.getItem('admin')).token
			let newMessage = await axios.post(`http://localhost:8000/api/message`, message, {
				headers: {
					Authorization: authHeader
				}
			})
			dispatch({
				type: ADD_MESSAGE_SUCCESS,
				payload: newMessage
			})
		} catch (err) {
			dispatch({
				type: ADD_MESSAGE_FAILED,
				payload: err
			})
		}
	}
}
export const deleteMessage = id => {
	return async dispatch => {
		let authHeader = 'Bearer ' + JSON.parse(localStorage.getItem('admin')).token
		try {
			let newMessage = await axios.delete(`http://localhost:8000/api/message/${id}`, {
				headers: {
					Authorization: authHeader
				}
			})
			dispatch({
				type: DELETE_MESSAGE_SUCCESS,
				payload: newMessage.data[0]
			})
		} catch (err) {
			dispatch({
				type: DELETE_MESSAGE_FAILED,
				payload: err
			})
		}
	}
}
export const updateMessage = (message, id) => {
	return async dispatch => {
		let authHeader = 'Bearer ' + JSON.parse(localStorage.getItem('admin')).token
		try {
			let messageUpdate = await axios.patch(
				`http://localhost:8000/api/message/edit/${id}`,
				message, {
					headers: {
						Authorization: authHeader
					}
				}
			)

			dispatch({
				type: UPDATE_MESSAGE_SUCCESS,
				payload: messageUpdate.data
			})
		} catch (err) {
			dispatch({
				type: UPDATE_MESSAGE_FAILED,
				payload: err
			})
		}
	}
}