import { connect } from "react-redux"
import { requestAllDirectMessages } from "../../actions/direct_message_actions"
import DirectMessageHeader from "./direct_message_header"


const mapStateToProps = (state, ownProps) => {
  return {
    directMessage: state.entities.directMessages[ownProps.match.params.directMessageId],
    users: Object.values(state.entities.users),
    pathName: ownProps.history.location.pathname,
    memberships: state.entities.memberships,
    currentUser: state.entities.users[state.session.id],
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestAllDirectMessages: () => dispatch(requestAllDirectMessages),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DirectMessageHeader)