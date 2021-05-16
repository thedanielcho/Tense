import { connect } from "react-redux"
import { createChannel, requestAllChannels } from "../../actions/channel_actions"
import { requestAllUsers } from "../../actions/user_actions"
import LeftSidebar from "./left_sidebar"


const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    channels: Object.values(state.entities.channels),
    pathName: ownProps.history.location.pathname,
    channel: state.entities.channels[ownProps.match.params.viewId]
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    createChannel: (channel) => dispatch(createChannel(channel)),
    requestAllChannels: () => dispatch(requestAllChannels()),
    requestAllUsers: (channelId) => dispatch(requestAllUsers(channelId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftSidebar)