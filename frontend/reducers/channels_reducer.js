import { RECEIVE_ALL_CHANNELS, RECEIVE_CHANNEL, REMOVE_CHANNEL } from "../actions/channel_actions";

const channelsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_CHANNELS:
      action.channels.forEach((channel)=>{
        newState[channel.id] = channel
      })
      return newState;
    case RECEIVE_CHANNEL:
      const newChannel = { [action.channel.id]: action.channel }
      return Object.assign({}, state, newChannel)
    case REMOVE_CHANNEL:
      delete newState[action.channelId];
      return newState;
    default:
      return state;
  }
}

export default channelsReducer;