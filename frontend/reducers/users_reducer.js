import { RECEIVE_USER, REMOVE_USER } from "../actions/membership_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_ALL_USERS } from "../actions/user_actions";


const usersReducer = (state= {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  debugger
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {[action.user.id]: action.user});
    case RECEIVE_ALL_USERS:
      // let refreshedState = {}
      // action.users.forEach((user) => {
      //   refreshedState[user.id] = user
      // })
      // return refreshedState
      action.users.forEach((user) => {
        newState[user.id] = user
      })
      return newState;
    case RECEIVE_USER:
      return Object.assign({}, state, {[action.user.id]: action.user});
    case REMOVE_USER:
      delete newState[action.userId];
      return newState;
    default:
      return state;
  }
}
export default usersReducer;