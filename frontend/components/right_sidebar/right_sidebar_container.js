import { connect } from "react-redux"
import RightSidebar from "./right_sidebar"

const mapStateToProps = (state, ownProps) => {
  return {
    channel: state.entities.channels[ownProps.match.params.channelId],
    users: Object.values(state.entities.users),
    pathName: ownProps.history.location.pathname,
    memberships: state.entities.memberships,
  }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {

//   }
// }

export default connect(mapStateToProps, null)(RightSidebar)