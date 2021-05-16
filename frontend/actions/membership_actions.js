import * as APIUtils from '../util/membership_api_utl';

export const RECEIVE_USER = "RECEIVE_USER";
export const REMOVE_USER = "REMOVE_USER";

const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  }
}

const removeUser = (userId) => {
  return {
    type: REMOVE_USER,
    userId
  }
}

export const createMembership = (memberableId, memberableType, membership) => (dispatch) => {
  return (
    APIUtils.createMembership(memberableId, memberableType, membership)
      .then((user) => dispatch(receiveUser(user)))
  )
}

export const destroyMembership = (membershipId) => {
  return (
    APIUtils.destroyMembership(membershipId)
      .then((userId) => dispatch(removeUser(userId)))
  )
}
