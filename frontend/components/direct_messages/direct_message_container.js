import { connect } from "react-redux"
import { requestAllChannels } from "../../actions/channel_actions"
import { requestAllDirectMessages } from "../../actions/direct_message_actions"
import { createMembership } from "../../actions/membership_actions"
import { requestAllDMMessages, requestAllMessages } from "../../actions/message_actions"
import { requestAllDMUsers } from "../../actions/user_actions"
import DirectMessage from "./direct_message"



const mapStateToProps = (state, ownProps) => {
  return{
    directMessage: state.entities.directMessages[ownProps.match.params.directMessageId],
    pathname: ownProps.history.location.pathname,
    currentUser: state.entities.users[state.session.id],
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    requestAllDirectMessages: () => dispatch(requestAllDirectMessages()),
    requestAllMessages: (channelId) => dispatch(requestAllDMMessages(channelId)),
    createMembership: (memberableId, memberableType, membership) => dispatch(createMembership(memberableId, memberableType, membership)),
    requestAllUsers: (dmId) => dispatch(requestAllDMUsers(dmId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DirectMessage)