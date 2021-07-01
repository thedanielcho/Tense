import * as APIUtils from '../util/messages_api_util';
export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";

const receiveMessages = (messages) => {
  return {
    type: RECEIVE_MESSAGES,
    messages
  }
}

export const requestAllMessages = (channelId) => (dispatch) => {
  debugger
  return (
    APIUtils.fetchMessages(channelId)
      .then((messages) => dispatch(receiveMessages(messages)))
  )
}