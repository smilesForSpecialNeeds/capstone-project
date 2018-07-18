import axios from 'axios'

export const FETCH_ACTIVITIES_SUCCESS = 'FETCH_ACTIVITIES_SUCCESS'
export const FETCH_ACTIVITIES_FAILED = 'FETCH_ACTIVITIES_FAILED'
export const ADD_ACTIVITIES_SUCCESS = 'ADD_ACTIVITIES_SUCCESS'
export const ADD_ACTIVITIES_FAILED = 'ADD_ACTIVITIES_FAILED'
export const DELETE_ACTIVITIES_FAILED = 'DELETE_ACTIVITIES_FAILED'
export const DELETE_ACTIVITIES_SUCCESS = 'DELETE_ACTIVITIES_SUCCESS'
export const UPDATE_ACTIVITIES_SUCCESS = 'UPDATE_ACTIVITIES_SUCCESS'
export const UPDATE_ACTIVITIES_FAILED = 'UPDATE_ACTIVITIES_FAILED'

export const fetchActivities = () => {
	return async dispatch => {
		try {
      let authHeader = localStorage.getItem('admin')
			let activities = await axios.get('http://localhost:8000/api/activities',
        { headers: { Authorization: authHeader}})
			dispatch({
				type: FETCH_ACTIVITIES_SUCCESS,
				payload: activities
			})
		} catch (err) {
			dispatch({
				type: FETCH_ACTIVITIES_FAILED,
				payload: err
			})
		}
	}
}
export const addActivities = activity => {
	return async dispatch => {
		try {
      let authHeader = localStorage.getItem('admin')
			let newActivity = await axios.post(`http://localhost:8000/api/activities`,
        activity, { headers: { Authorization: authHeader}})
			dispatch({
				type: ADD_ACTIVITIES_SUCCESS,
				payload: newActivity
			})
		} catch (err) {
			dispatch({
				type: ADD_ACTIVITIES_FAILED,
				payload: err
			})
		}
	}
}
export const deleteActivities = id => {
	return async dispatch => {
    let authHeader = 'Bearer ' + JSON.parse(localStorage.getItem('admin')).token
		try {
			let newActivity = await axios.delete(`http://localhost:8000/api/activities/${id}`,{ headers: { Authorization: authHeader}})
			dispatch({
				type: DELETE_ACTIVITIES_SUCCESS,
				payload: newActivity.data[0]
			})
		} catch (err) {
			dispatch({
				type: DELETE_ACTIVITIES_FAILED,
				payload: err
			})
		}
	}
}
export const updateActivities = (activity, id) => {
	return async dispatch => {
    let authHeader = 'Bearer ' + JSON.parse(localStorage.getItem('admin')).token
		try {
			let activityUpdate = await axios.patch(
				`http://localhost:8000/api/activities/edit/${id}`,
				activity, { headers: { Authorization: authHeader}}
			)

			dispatch({
				type: UPDATE_ACTIVITIES_SUCCESS,
				payload: activityUpdate.data
			})
		} catch (err) {
			dispatch({
				type: UPDATE_ACTIVITIES_FAILED,
				payload: err
			})
		}
	}
}
