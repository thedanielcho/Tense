import * as APIUtils from '../util/membership_api_utl';

export const RECEIVE_USER = "RECEIVE_USER";
export const REMOVE_USER = "REMOVE_USER";
export const RECEIVE_MEMBERSHIPS = "RECEIVE_MEMBERSHIPS";
export const RECEIVE_MEMBERSHIP = "RECEIVE_MEMBERSHIP";

const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  }
}

const removeUser = (membership) => {
  return {
    type: REMOVE_USER,
    membership
  }
}

const recieveMemberships = (memberships) => {
  return {
    type: RECEIVE_MEMBERSHIPS,
    memberships
  }
}

export const receiveMembership = (membershipInfo) => {
  return {
    type: RECEIVE_MEMBERSHIP,
    membershipInfo
  }
}

export const createMembership = (memberableId, memberableType, membership) => (dispatch) => {
  return (
    APIUtils.createMembership(memberableId, memberableType, membership)
      .then((membershipInfo) => dispatch(receiveMembership(membershipInfo)))
  )
}

export const destroyMembership = (membershipId) => (dispatch) => {
  return (
    APIUtils.destroyMembership(membershipId)
      .then((membership) => dispatch(removeUser(membership)))
  )
}

export const requestMemberships = (channelId) => (dispatch) => {

  return (
    APIUtils.fetchMemberships(channelId)
      .then((memberships) => dispatch(recieveMemberships(memberships)))
  )
}
