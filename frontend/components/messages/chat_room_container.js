import { connect } from "react-redux"
import { requestMemberships } from "../../actions/membership_actions"
import { requestAllMessages } from "../../actions/message_actions"
import { openModal } from "../../actions/modal_actions"
import { requestAllUsers } from "../../actions/user_actions"
import { getChannelUsers } from "../../util/selectors"
import ChatRoom from "./chat_room"

const mapStateToProps = (state, ownProps) => {
  let channelUsers = getChannelUsers(state.entities.memberships, state.entities.users)
  return {
    channel: state.entities.channels[ownProps.match.params.channelId],
    currentUser: state.entities.users[state.session.id],
    users: channelUsers,
    messages: Object.values(state.entities.messages)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestAllMessages: (channelId) => dispatch(requestAllMessages(channelId)),
    requestAllUsers: (channelId) => dispatch(requestAllUsers(channelId)),
    openModal: (modal, target) => dispatch(openModal(modal, target)),
    requestMemberships: (channelId) => dispatch(requestMemberships(channelId)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom)