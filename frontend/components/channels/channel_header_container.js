import { connect } from "react-redux"
import { requestAllChannels } from "../../actions/channel_actions"
import { requestMemberships } from "../../actions/membership_actions"
import { requestAllUsers } from "../../actions/user_actions"
import { openModal } from "../../actions/modal_actions"
import ChannelMain from "./channel_main"
import ChannelHeader from "./channel_header"
import { getChannelUsers } from "../../util/selectors"

const mapStateToProps = (state, ownProps) => {
  let channelUsers = getChannelUsers(state.entities.memberships, state.entities.users)
  return {
    channel: state.entities.channels[ownProps.match.params.channelId],
    users: channelUsers,
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
    updateChannel: (channelId, channel) => dispatch(updateChannel(channelId, channel)),
    openModal: (modal) => dispatch(openModal(modal))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelHeader)