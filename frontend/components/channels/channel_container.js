import { connect } from "react-redux"
import { requestAllChannels } from "../../actions/channel_actions"
import { logout } from "../../actions/session_actions"
import { requestAllUsers } from "../../actions/user_actions"
import Channel from "./channel"

const mapStateToProps = (state, ownProps) => {
  return {
    channel: state.entities.channels[ownProps.match.params.channelId],
    users: Object.values(state.entities.users),
    pathName: ownProps.history.location.pathname
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestAllChannels: () => dispatch(requestAllChannels()),
    requestAllUsers: (channelId) => dispatch(requestAllUsers(channelId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Channel)