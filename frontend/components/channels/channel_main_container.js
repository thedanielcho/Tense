import { connect } from "react-redux"
import { requestAllChannels } from "../../actions/channel_actions"
import { requestMemberships } from "../../actions/membership_actions"
import { requestAllMessages } from "../../actions/message_actions"
import { requestAllUsers } from "../../actions/user_actions"
import ChannelMain from "./channel_main"

const mapStateToProps = (state, ownProps) => {
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
    requestAllMessages: (channelId) => dispatch(requestAllMessages(channelId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelMain)