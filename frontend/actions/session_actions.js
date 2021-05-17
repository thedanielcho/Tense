import * as APIUtils from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS"

const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  }
}

const logoutCurrentUser = () => {
  debugger
  return {
    type: LOGOUT_CURRENT_USER
  }
}

const receiveErrors = (errors) => {
  return ({
  type: RECEIVE_ERRORS,
  errors: errors.responseJSON
})}

export const removeErrors = () => {
  return ({
    type: REMOVE_ERRORS,
  })
} 

export const signup = (user) => (dispatch) => (
  APIUtils.signup(user)
    .then((user) => dispatch(receiveCurrentUser(user)))
    .fail(errors => dispatch(receiveErrors(errors))) 
)

export const login = (user) => (dispatch) => {
  return (
  APIUtils.login(user)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail(errors => dispatch(receiveErrors(errors))) 
  )
}

export const logout = () => (dispatch) => {
  debugger
  return(
  APIUtils.logout()
    .then(() => dispatch(logoutCurrentUser()))
)}

export const demoLogin = () => (dispatch) => {
  const demoUser = {
    email: "demo@mail.com",
    display_name: "demo user",
    password: "password"}
  return(
    APIUtils.login(demoUser)
    .then((user) => dispatch(receiveCurrentUser(user)))
  )
}