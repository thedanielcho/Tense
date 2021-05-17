import * as APIUtils from '../util/user_api_util';
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";

const receiveAllUsers = (users) => {
  return {
    type: RECEIVE_ALL_USERS,
    users
  }
}

export const requestAllUsers = (channelId) => (dispatch) => {
  return (
    APIUtils.fetchAllUsers(channelId)
      .then((users) => dispatch(receiveAllUsers(users)))
  )
}