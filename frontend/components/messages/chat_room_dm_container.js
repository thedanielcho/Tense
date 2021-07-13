import { connect } from "react-redux"
import { requestAllDMMessages, requestAllMessages } from "../../actions/message_actions"
import { openModal } from "../../actions/modal_actions"
import { getDMUsers } from "../../util/selectors"
import ChatRoomDM from "./chat_room_dm"

const mapStateToProps = (state, ownProps) => {
  let directMessage = state.entities.directMessages[ownProps.match.params.directMessageId]
  let currentUser = state.entities.users[state.session.id]
  let dmUsers = getDMUsers(directMessage, currentUser)
  return {
    directMessage,
    currentUser,
    users: dmUsers,
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