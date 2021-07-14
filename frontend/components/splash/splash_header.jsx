import React from 'react';
import { Link, NavLink } from 'react-router-dom';


class SplashHeader extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    if(!this.props.currentUser){
      return(
        <header className="splash-header">
          <div className="left-nav">
            <NavLink to={"/"} className="logo">
              <img src={window.tempIcon} alt="temp icon" />
              <h2>TENSE</h2>
            </NavLink>
          </div>
          <div className="right-nav">
            <Link className="login" to="/login">Log in</Link>
            <Link className="signup" to="/signup">
              <button>JOIN FOR FREE</button>
            </Link>
            <button className="demo" onClick={this.props.handleDemo}>TRY A DEMO</button>
          </div>
        </header>
      )
    } else{
      return(
        <header className="splash-header">
          <div className="left-nav">
            <NavLink to={"/"} className="logo">
              <img src={window.tempIcon} alt="temp icon" />
              <h2>TENSE</h2>
            </NavLink>
          </div>
          <div className="right-nav">
            <Link className="signup" to="/signup">
              <button>LAUNCH TENSE</button>
            </Link>
            <button className="demo" onClick={this.props.logout}>LOGOUT</button>
          </div>
        </header>
      )
    }
  }
}

export default SplashHeader;