import React from "react";
import ReactDOM from "react-dom";
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
  window.logout = logout;


  ReactDOM.render(<Root store={store}/>, root);
})
