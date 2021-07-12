import { connect } from "react-redux"
import { requestAllDMMessages, requestAllMessages } from "../../actions/message_actions"
import { openModal } from "../../actions/modal_actions"
import ChatRoomDM from "./chat_room_dm"

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    directMessage: state.entities.directMessages[ownProps.match.params.directMessageId],
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users,
    messages: Object.values(state.entities.messages)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestAllMessages: (dmId) => dispatch(requestAllDMMessages(dmId)),
    openModal: (modal, target) => dispatch(openModal(modal, target))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ChatRoomDM)