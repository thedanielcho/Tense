import React from 'react';
import { NavLink } from 'react-router-dom';
import LinksTab from './links';
import SearchBarContainer from './search_bar_container';

class Header extends React.Component{
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(){
    this.props.logout()
  }

  render(){
    return(
      <div className="header">
        <NavLink to={"/"} className="logo">
          <img src={window.tempIcon} alt="temp icon" />
          <h2>TENSE</h2>
        </NavLink>
        <SearchBarContainer pathName={this.props.pathName} history={this.props.history} />
        <div className="header-right">
          <LinksTab />
          <button onClick={this.handleLogout}>Log Out</button>
        </div>
      </div>
    )
  }
}

export default Header;