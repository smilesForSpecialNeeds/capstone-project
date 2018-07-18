import axios from 'axios'

export const FETCH_PROVIDER_SUCCESS = 'FETCH_PROVIDER_SUCCESS'
export const FETCH_PROVIDER_FAILED = 'FETCH_PROVIDER_FAILED'
export const ADD_PROVIDER_SUCCESS = 'ADD_PROVIDER_SUCCESS'
export const ADD_PROVIDER_FAILED = 'ADD_PROVIDER_FAILED'
export const DELETE_PROVIDER_SUCCESS = 'DELETE_PROVIDER_SUCCESS'
export const DELETE_PROVIDER_FAILED = 'DELETE_PROVIDER_FAILED'
export const UPDATE_PROVIDER_SUCCESS = 'UPDATE_PROVIDER_SUCCESS'
export const UPDATE_PROVIDER_FAILED = 'UPDATE_PROVIDER_FAILED'

export const fetchProvider = () => {
	return async dispatch => {
		try {
      let authHeader = localStorage.getItem('admin')
			let provider = await axios.get('http://localhost:8000/api/provider', { headers: { Authorization: authHeader}})

			dispatch({
				type: FETCH_PROVIDER_SUCCESS,
				payload: provider
			})
		} catch (err) {
			dispatch({
				type: FETCH_PROVIDER_FAILED,
				payload: err
			})
		}
	}
}
export const addProvider = provider => {
	return async dispatch => {
		try {
      let authHeader = localStorage.getItem('admin')
			let newProvider = await axios.post(`http://localhost:8000/api/provider`, provider, { headers: { Authorization: authHeader}})
			dispatch({
				type: ADD_PROVIDER_SUCCESS,
				payload: newProvider
			})
		} catch (err) {
			dispatch({
				type: ADD_PROVIDER_FAILED,
				payload: err
			})
		}
	}
}
export const deleteProvider = id => {
	return async dispatch => {
      let authHeader = localStorage.getItem('admin')
		try {
			let newProvider = await axios.delete(`http://localhost:8000/api/provider/${id}`,{ headers: { Authorization: authHeader}})
			dispatch({
				type: DELETE_PROVIDER_SUCCESS,
				payload: newProvider.data[0]
			})
		} catch (err) {
			dispatch({
				type: DELETE_PROVIDER_FAILED,
				payload: err
			})
		}
	}
}
export const updateProvider = (provider, id) => {
	return async dispatch => {
      let authHeader = localStorage.getItem('admin')
		try {
			let providerUpdate = await axios.patch(
				`http://localhost:8000/api/provider/edit/${id}`,
				provider, { headers: { Authorization: authHeader}}
			)

			dispatch({
				type: UPDATE_PROVIDER_SUCCESS,
				payload: providerUpdate.data
			})
		} catch (err) {
			dispatch({
				type: UPDATE_PROVIDER_FAILED,
				payload: err
			})
		}
	}
}
