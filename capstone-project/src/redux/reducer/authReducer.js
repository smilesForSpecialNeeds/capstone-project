import { USER_LOGIN_SUCCESS, USER_LOGIN_FAILED, USER_LOGOUT, USER_REGISTRATION_SUCCESS, USER_REGISTRATION_FAILED } from '../actions/auth'

let initialState = {
  admin: {},
  err: {},
  isAuthed: !!localStorage.getItem('admin'),
  name: localStorage.getItem('name')


}

export default (state=initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      localStorage.setItem('admin', action.payload.token)
      localStorage.setItem('name', action.payload.user_name)

      // localStorage.setItem('token', JSON.stringify(action.payload.token))
        console.log(action.payload)
      return {
        ...state,
        admin: action.payload.token,
        isAuthed: true


      }
    case USER_LOGIN_FAILED:
      return {
        ...state,
        err: action.payload
      }
    case USER_REGISTRATION_SUCCESS:
      return {
        ...state

      }
    case USER_REGISTRATION_FAILED:
      return {
        ...state,
        err: action.payload
      }
    case USER_LOGOUT:
      localStorage.removeItem('admin')
      return {
        ...initialState
      }
    default:
      return state
  }
}
