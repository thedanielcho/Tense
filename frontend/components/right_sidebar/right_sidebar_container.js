import { connect } from "react-redux"
import { openModal } from "../../actions/modal_actions"
import RightSidebar from "./right_sidebar"

const mapStateToProps = (state, ownProps) => {
  return {
    channel: state.entities.channels[ownProps.match.params.channelId],
    users: Object.values(state.entities.users),
    pathName: ownProps.history.location.pathname,
    memberships: state.entities.memberships,
    currentUser: state.entities.users[state.session.id],
    modal: state.ui.modal,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    openModal: (modal, target) => dispatch(openModal(modal, target))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RightSidebar)