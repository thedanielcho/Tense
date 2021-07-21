import { connect } from "react-redux"
import { createDirectMessage } from "../../actions/direct_message_actions"
import { requestMemberships } from "../../actions/membership_actions"
import SearchBar from "./search_bar"

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.entities.users,
    channels: state.entities.channels,
    directMessages: Object.values(state.entities.directMessages),
    currentUser: state.entities.users[state.session.id],
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createDirectMessage: (userId) => dispatch(createDirectMessage(userId)),
    requestMemberships: (channelId) => dispatch(requestMemberships(channelId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)