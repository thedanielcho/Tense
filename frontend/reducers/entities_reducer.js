import { combineReducers } from "redux";
import channelsReducer from "./channels_reducer";
import membershipsReducer from "./memberships_reducer";
import usersReducer from "./users_reducer";


const entitiesReducer = combineReducers({
  users: usersReducer,
  channels: channelsReducer,
  memberships: membershipsReducer
})

export default entitiesReducer;