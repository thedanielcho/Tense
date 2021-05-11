import { connect } from "react-redux"
import { demoLogin, login, removeErrors } from "../../actions/session_actions"
import SessionForm from './session_form'

const mapStateToProps = (state, ownProps) => {

  return {
    errors: state.errors,
    formType: "Login"
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: (user) => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors()),
    demoLogin: () => dispatch(demoLogin())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)