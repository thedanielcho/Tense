import { connect } from "react-redux"
import { logout } from "../../actions/session_actions"
import Header from "./header"

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    user: state.entities.users[state.session.id],
    users: state.entities.users,
    channels: state.entities.channels,
    pathName: ownProps.history.location.pathname,
    history: ownProps.history
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)