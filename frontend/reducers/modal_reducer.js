import { CLOSE_MODAL, OPEN_MODAL } from "../actions/modal_actions";

const modalReducer = (state = null, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      let modal = {};
      modal["type"] = action.modal;
      modal["target"] = action.target;
      return modal;
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
}

export default modalReducer;