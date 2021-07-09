import { RECEIVE_ALL_DIRECT_MESSAGES, RECEIVE_DIRECT_MESSAGE } from "../actions/direct_message_actions";


const DirectMessagesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_DIRECT_MESSAGES:
      action.directMessages.forEach((dm)=>{
        newState[dm.id] = dm
      })
      return newState
    case RECEIVE_DIRECT_MESSAGE:
      const newDM = {[action.directMessage.id]: action.directMessage}
      return Object.assign({}, state, newDM)
    default:
      return state;
  }
}

export default DirectMessagesReducer