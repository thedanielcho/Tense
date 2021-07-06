import { RECEIVE_MEMBERSHIP } from "../actions/membership_actions";
import { RECEIVE_MESSAGES, REMOVE_MESSAGE } from "../actions/message_actions";

const messagesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_MESSAGES:
      newState = {};
      action.messages.forEach((message) => {
        newState[message.id] = message
      })
      return newState;
    case RECEIVE_MEMBERSHIP:
      return Object.assign({}, state, {[action.membershipInfo.membership.id]: action.membershipInfo.membership});
    case REMOVE_MESSAGE:
      debugger
      newState = Object.assign({}, state);
      delete newState[action.message.id];
      return newState;
    default:
      return state;
  }
}

export default messagesReducer;