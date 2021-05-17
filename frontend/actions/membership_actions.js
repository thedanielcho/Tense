import * as APIUtils from '../util/membership_api_utl';

export const RECEIVE_USER = "RECEIVE_USER";
export const REMOVE_USER = "REMOVE_USER";
export const RECEIVE_MEMBERSHIPS = "RECEIVE_MEMBERSHIPS";

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

const recieveMemberships = (memberships) => {

  return {
    type: RECEIVE_MEMBERSHIPS,
    memberships
  }
}

export const createMembership = (memberableId, memberableType, membership) => (dispatch) => {
  return (
    APIUtils.createMembership(memberableId, memberableType, membership)
      .then((user) => dispatch(receiveUser(user)))
  )
}

export const destroyMembership = (membershipId) => (dispatch) => {
  return (
    APIUtils.destroyMembership(membershipId)
      .then((userId) => dispatch(removeUser(userId)))
  )
}

export const requestMemberships = (channelId) => (dispatch) => {

  return (
    APIUtils.fetchMemberships(channelId)
      .then((memberships) => dispatch(recieveMemberships(memberships)))
  )
}
