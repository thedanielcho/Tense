import { connect } from "react-redux"
import { logout } from "../../actions/session_actions"
import Header from "./header"

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[state.session.id],
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)