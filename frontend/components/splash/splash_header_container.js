import { connect } from "react-redux"
import SplashHeader from "./splash_header"
import { demoLogin, logout } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    currentChannel: Object.values(state.entities.channels)[0]
  }
}

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  demoLogin: () => dispatch(demoLogin())
})

export default connect(mapStateToProps, mapDispatchToProps)(SplashHeader)