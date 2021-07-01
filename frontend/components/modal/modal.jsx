import React from 'react';
import { connect } from "react-redux";
import { requestAllMessages } from '../../actions/message_actions';
import { closeModal } from "../../actions/modal_actions";
import ChannelCreateFormContainer from '../channels/channel_create_form_container';
import ChannelDeleteFormContainer from '../channels/channel_delete_form_container';
import ChannelEditFormContainer from '../channels/channel_edit_form_container';

const Modal = ({modal, closeModal}) => {
  if(!modal){
    return null;
  }
  let component;
  switch (modal) {
    case 'channelCreate':
      component = <ChannelCreateFormContainer />;
      break;
    case 'channelEdit':
      component = <ChannelEditFormContainer />;
      break
    case 'channelDelete':
      component = <ChannelDeleteFormContainer handleRedirect={handleRedirect.bind(this)}/>;
      break
    default:
      return null;
  }
  
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  )
}

const handleRedirect = (redirectPath) => {
  debugger
  window.location.assign(redirectPath);
  debugger
  requestAllMessages(1);
}

const mapStateToProps = (state) => {
  return {
    modal: state.ui.modal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)