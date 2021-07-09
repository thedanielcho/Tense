import { RECEIVE_MEMBERSHIPS, REMOVE_USER } from "../actions/membership_actions";

const membershipsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_MEMBERSHIPS:
      newState = {}
      action.memberships.forEach(membership => {
        newState[membership.id] = membership
      })
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state);
      delete newState[action.membership.id];
      return newState;
    default:
      return state;
  }
}

export default membershipsReducer;