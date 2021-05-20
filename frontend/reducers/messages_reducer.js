import { RECEIVE_MEMBERSHIP } from "../actions/membership_actions";
import { RECEIVE_MESSAGES } from "../actions/message_actions";

const messagesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MESSAGES:
      let newState = {};
      action.messages.forEach((message) => {
        newState[message.id] = message
      })
      return newState;
    case RECEIVE_MEMBERSHIP:
      return Object.assign({}, state, {[action.membershipInfo.membership.id]: action.membershipInfo.membership});
    default:
      return state;
  }
}

export default messagesReducer;