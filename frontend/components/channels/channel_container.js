import { connect } from "react-redux"
import { logout } from "../../actions/session_actions"
import Channel from "./channel"


const mapDispatchToProps = (dispatch, ownProps) => {
  debugger
  return {
    logout: () => dispatch(logout()),
  }
}

export default connect(null, mapDispatchToProps)(Channel)