import { connect } from "react-redux"
import { requestAllDirectMessages } from "../../actions/direct_message_actions"
import { getChannelUsers, getDMUsers } from "../../util/selectors"
import DirectMessageHeader from "./direct_message_header"


const mapStateToProps = (state, ownProps) => {
  let directMessage = state.entities.directMessages[ownProps.match.params.directMessageId]
  let currentUser = state.entities.users[state.session.id]
  let dmUsers = getDMUsers(directMessage, currentUser)
  return {
    directMessage,
    users: dmUsers,
    currentUser,
    pathName: ownProps.history.location.pathname,
    memberships: state.entities.memberships,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestAllDirectMessages: () => dispatch(requestAllDirectMessages),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DirectMessageHeader)