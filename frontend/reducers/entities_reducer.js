import { combineReducers } from "redux";
import channelsReducer from "./channels_reducer";
import usersReducer from "./users_reducer";


const entitiesReducer = combineReducers({
  users: usersReducer,
  channels: channelsReducer
})

export default entitiesReducer;