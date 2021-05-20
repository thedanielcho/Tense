import { RECEIVE_MEMBERSHIPS } from "../actions/membership_actions";

const membershipsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MEMBERSHIPS:
      debugger
      let newState = {}
      action.memberships.forEach(membership => {
        newState[membership.id] = membership
      })
      return newState;
    default:
      return state;
  }
}

export default membershipsReducer;