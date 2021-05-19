import { connect } from "react-redux"
import { requestAllChannels } from "../../actions/channel_actions"
import { requestMemberships } from "../../actions/membership_actions"
import { requestAllUsers } from "../../actions/user_actions"
import ChannelMain from "./channel_main"
import ChannelHeader from "./channel_header"

const mapStateToProps = (state, ownProps) => {
  return {
    channel: state.entities.channels[ownProps.match.params.channelId],
    users: Object.values(state.entities.users),
    pathName: ownProps.history.location.pathname,
    memberships: state.entities.memberships,
    currentUser: state.entities.users[state.session.id],
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestAllChannels: () => dispatch(requestAllChannels()),
    requestAllUsers: (channelId) => dispatch(requestAllUsers(channelId)),
    requestMemberships: (channelId) => dispatch(requestMemberships(channelId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelHeader)