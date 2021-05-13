import React from "react";
import ReactDOM from "react-dom";
import {
  createChannel,
  destroyChannel,
  requestAllChannels,
  requestSingleChannel,
  updateChannel
} from "./actions/channel_actions";
import { logout } from "./actions/session_actions";
import Root from "./components/root";
import configureStore from "./store/store";


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  let store = configureStore();
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.logout = logout();
  window.requestAllChannels = requestAllChannels();
  window.requestSingleChannel = requestSingleChannel();
  window.createChannel = createChannel;
  window.updateChannel = updateChannel;
  window.destroyChannel = destroyChannel;


  ReactDOM.render(<Root store={store}/>, root);
})
