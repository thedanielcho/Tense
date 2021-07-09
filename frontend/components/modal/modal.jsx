import React from 'react';
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import ChannelCreateFormContainer from '../channels/channel_create_form_container';
import ChannelDeleteFormContainer from '../channels/channel_delete_form_container';
import ChannelEditFormContainer from '../channels/channel_edit_form_container';
import MembershipDeleteFormContainer from '../right_sidebar/membership_delete_form_container';
import MessageDeleteFormContainer from '../messages/message_delete_form_container';

const Modal = ({modal, closeModal, history, key}) => {
  if(!modal){
    return null;
  }
  let component;
  switch (modal.type) {
    case 'channelCreate':
      component = <ChannelCreateFormContainer />;
      break;
    case 'channelEdit':
      component = <ChannelEditFormContainer />;
      break
    case 'channelDelete':
      component = <ChannelDeleteFormContainer history={history}/>;
      break
    case 'memberDelete':
      component = <MembershipDeleteFormContainer membershipId={modal.target}/>
      break
    case 'messageDelete':
      component = <MessageDeleteFormContainer message={modal.target} />
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


const mapStateToProps = (state, ownProps) => {
  return {
    modal: state.ui.modal,
    history: ownProps.history
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)