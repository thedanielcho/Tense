import {connect} from 'react-redux';
import { demoLogin, logout } from '../../actions/session_actions';

import Splash from './splash';

const mapStateToProps = (state) => {

  return {
    currentUser: state.entities.users[state.session.id]
  }
}

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  demoLogin: () => dispatch(demoLogin())
})

export default connect(mapStateToProps, mapDispatchToProps)(Splash);