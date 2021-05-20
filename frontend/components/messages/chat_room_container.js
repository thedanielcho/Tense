import { connect } from "react-redux"
import { requestAllMessages } from "../../actions/message_actions"
import ChatRoom from "./chat_room"

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    channel: state.entities.channels[ownProps.match.params.channelId],
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users,
    messages: Object.values(state.entities.messages)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestAllMessages: (channelId) => dispatch(requestAllMessages(channelId))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom)