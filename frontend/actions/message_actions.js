import * as APIUtils from '../util/messages_api_util';
export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const REMOVE_MESSAGE = "REMOVE_MESSAGE";

const receiveMessages = (messages) => {
  return {
    type: RECEIVE_MESSAGES,
    messages
  }
}

const removeMessage = (message) => {
  debugger
  return {
    type: REMOVE_MESSAGE,
    message
  }
}

export const requestAllMessages = (channelId) => (dispatch) => {
  return (
    APIUtils.fetchMessages(channelId)
      .then((messages) => dispatch(receiveMessages(messages)))
  )
}

export const destroyMessage = (id) => (dispatch) => {
  debugger
  return (
    APIUtils.destroyMessage(id)
      .then((message) => dispatch(removeMessage(message)))
  )
}