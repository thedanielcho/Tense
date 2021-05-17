import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component{
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(){
    debugger
    this.props.logout()
  }

  render(){
    return(
      <div className="header">
        <NavLink to={"/"} className="logo">
          <img src={window.tempIcon} alt="temp icon" />
          <h2>TENSE</h2>
        </NavLink>
        <button onClick={this.handleLogout}>Log Out</button>
      </div>
    )
  }
}

export default Header;