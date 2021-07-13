import { connect } from "react-redux"
import { createDirectMessage } from "../../actions/direct_message_actions"
import { openModal } from "../../actions/modal_actions"
import { getChannelUsers } from "../../util/selectors"
import RightSidebar from "./right_sidebar"

const mapStateToProps = (state, ownProps) => {
  let channelUsers = getChannelUsers(state.entities.memberships, state.entities.users)
  return {
    channel: state.entities.channels[ownProps.match.params.channelId],
    users: channelUsers,
    pathName: ownProps.history.location.pathname,
    memberships: state.entities.memberships,
    currentUser: state.entities.users[state.session.id],
    modal: state.ui.modal,
    directMessages: Object.values(state.entities.directMessages)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    openModal: (modal, target) => dispatch(openModal(modal, target)),
    createDirectMessage: (userId) => dispatch(createDirectMessage(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RightSidebar)