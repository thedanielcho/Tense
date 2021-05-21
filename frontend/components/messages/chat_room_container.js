import { connect } from "react-redux"
import { requestAllMessages } from "../../actions/message_actions"
import { requestAllUsers } from "../../actions/user_actions"
import ChatRoom from "./chat_room"

const mapStateToProps = (state, ownProps) => {
  return {
    channel: state.entities.channels[ownProps.match.params.channelId],
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users,
    messages: Object.values(state.entities.messages)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestAllMessages: (channelId) => dispatch(requestAllMessages(channelId)),
    requestAllUsers: (channelId) => dispatch(requestAllUsers(channelId))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom)