import * as APIUtils from '../util/channel_api_util';
export const RECEIVE_ALL_CHANNELS = "RECEIVE_ALL_CHANNELS";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const REMOVE_CHANNEL = "REMOVE_CHANNEL";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS";

const receiveAllChannels = (channels) => {
  return {
    type: RECEIVE_ALL_CHANNELS,
    channels
  }
}

const receiveChannel = (channel) => {
  debugger
  return {
    type: RECEIVE_CHANNEL,
    channel
  }
}

const removeChannel = (channelId) => {
  return {
    type: REMOVE_CHANNEL,
    channelId
  }
}

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors: errors.responseJSON
  }
}

export const requestAllChannels = () => (dispatch) => (
  APIUtils.fetchAllChannels()
    .then((channels) => dispatch(receiveAllChannels(channels)))
);

export const requestSingleChannel = (id) => (dispatch) => (
  APIUtils.fetchChannel(id)
    .then((channel) => dispatch(receiveChannel(channel)))
    .fail((errors) => dispatch(receiveErrors(errors))) 
)

export const createChannel = (channel) => (dispatch) => {
  debugger
  return (
    APIUtils.createChannel(channel)
      .then((channel) => dispatch(receiveChannel(channel)))
      .fail(errors => dispatch(receiveErrors(errors))) 
  )
}

export const updateChannel = (id, channel) => (dispatch) => {
  debugger
  return (
    APIUtils.updateChannel(id, channel)
      .then(channel => dispatch(receiveChannel(channel)))
      .fail(errors => dispatch(receiveErrors(errors))) 
  )
}

// export const updateChannel = (id, channel) => (dispatch) => {
//   return (
//     APIUtils.updateChannel(id, channel)
//       .then((channel) => dispatch(receiveChannel(channel)))
//       .fail(errors => dispatch(receiveErrors(errors))) 
//   )
// }

export const destroyChannel = (id) => (dispatch) => {
  return (
    APIUtils.destroyChannel(id)
      .then((channelId) => dispatch(removeChannel(channelId)))
      .fail(errors => dispatch(receiveErrors(errors))) 
  )
}

