import { connect } from "react-redux"
import { requestAllChannels } from "../../actions/channel_actions"
import { createMembership, requestMemberships, receiveMembership } from "../../actions/membership_actions"
import { requestAllMessages } from "../../actions/message_actions"
import { logout } from "../../actions/session_actions"
import { requestAllUsers } from "../../actions/user_actions"
import Channel from "./channel"

const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    channel: state.entities.channels[ownProps.match.params.channelId],
    pathName: ownProps.history.location.pathname,
    memberships: state.entities.memberships,
    currentUser: state.entities.users[state.session.id],
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestAllChannels: () => dispatch(requestAllChannels()),
    requestAllUsers: (channelId) => dispatch(requestAllUsers(channelId)),
    requestMemberships: (channelId) => dispatch(requestMemberships(channelId)),
    requestAllMessages: (channelId) => dispatch(requestAllMessages(channelId)),
    createMembership: (memberableId, memberableType, membership) => dispatch(createMembership(memberableId, memberableType, membership)),
    receiveMembership: (membershipInfo) => dispatch(receiveMembership(membershipInfo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Channel)