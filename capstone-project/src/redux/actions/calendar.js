import axios from 'axios'

export const FETCH_CALENDAR_SUCCESS = 'FETCH_CALENDAR_SUCCESS'
export const FETCH_CALENDAR_FAILED = 'FETCH_CALENDAR_FAILED'
export const ADD_CALENDAR_SUCCESS = 'ADD_CALENDAR_SUCCESS'
export const ADD_CALENDAR_FAILED = 'ADD_CALENDAR_FAILED'
export const DELETE_CALENDAR_SUCCESS = 'DELETE_CALENDAR_SUCCESS'
export const DELETE_CALENDAR_FAILED = 'DELETE_CALENDAR_FAILED'
export const UPDATE_CALENDAR_SUCCESS = 'UPDATE_CALENDAR_SUCCESS'
export const UPDATE_CALENDAR_FAILED = 'UPDATE_CALENDAR_FAILED'

export const fetchCalendar = () => {
	return async dispatch => {
		try {
      let authHeader = localStorage.getItem('admin')
			let calendar = await axios.get('http://localhost:8000/api/calendar',
      { headers: { Authorization: authHeader}})
			dispatch({
				type: FETCH_CALENDAR_SUCCESS,
				payload: calendar
			})
		} catch (err) {
			dispatch({
				type: FETCH_CALENDAR_FAILED,
				payload: err
			})
		}
	}
}
export const addCalendar = calendar => {
	return async dispatch => {
		try {
      let authHeader = localStorage.getItem('admin')
			let newCalendar = await axios.post(`http://localhost:8000/api/calendar`,  calendar, { headers: { Authorization: authHeader}})
			dispatch({
				type: ADD_CALENDAR_SUCCESS,
				payload: newCalendar
			})
		} catch (err) {
			dispatch({
				type: ADD_CALENDAR_FAILED,
				payload: err
			})
		}
	}
}
export const deleteCalendar = id => {

	return async dispatch => {
        let authHeader = localStorage.getItem('admin')
		try {
			let newCalendar = await axios.delete(`http://localhost:8000/api/calendar/${id}`,{ headers: { Authorization: authHeader}})
			dispatch({
				type: DELETE_CALENDAR_SUCCESS,
				payload: newCalendar.data
			})

		} catch (err) {
			dispatch({
				type: DELETE_CALENDAR_FAILED,
				payload: err
			})
		}
	}
}
export const updateCalendar = (calendar, id) => {
	return async dispatch => {

		try {
      let authHeader = localStorage.getItem('admin')
			let calendarUpdate = await axios.patch(
				`http://localhost:8000/api/calendar/edit/${id}`,
				calendar, { headers: { Authorization: authHeader}})


			dispatch({
				type: UPDATE_CALENDAR_SUCCESS,
				payload: calendarUpdate.data
			})
		} catch (err) {
			dispatch({
				type: UPDATE_CALENDAR_FAILED,
				payload: err
			})
		}
	}
}
