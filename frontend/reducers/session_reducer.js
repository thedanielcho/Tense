import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from "../actions/session_actions";


const _nullSession = {
  id: null
}

const sessionReducer = (state = _nullSession, action) =>{
  Object.freeze(state);
  debugger
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, {id: action.user.id})
    case LOGOUT_CURRENT_USER:
      debugger
      return _nullSession;
    default:
      return state;
  }
}

export default sessionReducer;