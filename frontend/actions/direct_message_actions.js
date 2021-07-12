import * as APIUtils from '../util/direct_message_api_utils';
export const RECEIVE_ALL_DIRECT_MESSAGES = "RECEIVE_ALL_DIRECT_MESSAGES";
export const RECEIVE_DIRECT_MESSAGE = "RECEIVE_DIRECT_MESSAGE";

const receiveAllDirectMessages = (directMessages) => {
  return {
    type: RECEIVE_ALL_DIRECT_MESSAGES,
    directMessages
  }
}

const receiveDirectMessage = (directMessage) => {
  return {
    type: RECEIVE_DIRECT_MESSAGE,
    directMessage
  }
}

export const requestAllDirectMessages = () => (dispatch) => (
  APIUtils.fetchAllDMs()
    .then((directMessages) => dispatch(receiveAllDirectMessages(directMessages)))
);

export const requestDirectMessage = () => (dispatch) => (
  APIUtils.fetchDM()
    .then((directMessage) => dispatch(receiveDirectMessage(directMessage)))
)

export const createDirectMessage = (userId) => (dispatch) => {
  debugger
  return (
    APIUtils.createDM(userId)
      .then((directMessage) => dispatch(receiveDirectMessage(directMessage)))
  )
}

