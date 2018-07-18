import axios from 'axios'

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED'
export const USER_REGISTRATION_SUCCESS = 'USER_REGISTRATION_SUCCESS'
export const USER_REGISTRATION_FAILED = 'USER_REGISTRATION_FAILED'

export const USER_LOGOUT = 'USER_LOGOUT'

//USER REGISTRATION
export const userRegistration = (creds, history) => {
  console.log('CREDS',creds)
	return async dispatch => {

		try {

			let response = await axios.post(`http://localhost:8000/api/user/register`, creds)
			let admin = response.data
      console.log('RESPONSE',admin)
			dispatch({
				type: USER_REGISTRATION_SUCCESS

			})
      history.push('/login')

		} catch (err) {
			dispatch({
				type: USER_REGISTRATION_FAILED,
				payload: err
			})
			history.push('/login')
		}
	}
}

//USER LOGIN-WORKING
export const userLogin = (creds, history) => {
	return async dispatch => {
		try {
			let response = await axios.post(`http://localhost:8000/api/user/login`, creds)
			let admin = response.data
      console.log('ADMIN',admin);
			dispatch({
				type: USER_LOGIN_SUCCESS,
				payload: admin
			})

      if(admin.user_type === 'Client'){
        history.push('/client')
      }else if(admin.user_type === 'Admin'){
        history.push('/admin')
      }else if(admin.user_type === 'Provider'){
        history.push('/provider')
      }
		} catch (err) {
			dispatch({
				type: USER_LOGIN_FAILED,
				payload: err
			})
			history.push('/login')
		}
	}
}

//USER LOGOUT
export const userLogout = () => {
	return dispatch => {
		dispatch({
			type: USER_LOGOUT
		})
	}
}
