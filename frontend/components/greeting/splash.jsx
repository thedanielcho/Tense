import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class Splash extends React.Component{
  constructor(props){
    super(props)
    this.handleDemo = this.handleDemo.bind(this)
  }

  handleDemo(){
    this.props.demoLogin()
  }

  render(){
    return(
      <div className="splash">
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
            <button className="demo" onClick={this.handleDemo}>TRY A DEMO</button>
          </div>
        </header>
        <div className="splash-body">
          <h1>Tense makes it <span>downright stressful</span> to work together</h1>
          <Link className="signup" to="/signup">
              <button>JOIN FOR FREE</button>
            </Link>
        </div>
      </div>
    )
  }
}

export default Splash;