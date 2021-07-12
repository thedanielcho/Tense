import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag } from '@fortawesome/free-solid-svg-icons'
import { render } from 'react-dom';

class DirectMessagesListItem extends React.Component{
  constructor(props){
    super(props);
    this.handleRedirect = this.handleRedirect.bind(this);
  }
  handleRedirect(){
    this.props.handleRedirect(this.props.directMessage.id, "dm")
  }

  render(){
    let activeClass = (
      this.props.pathName.split("/")[2] === this.props.directMessage.id.toString()
      && this.props.pathName.split("/")[1] === "dm"
      ) ? 'active' : '';
    let name = this.props.directMessage.users[1].displayName;
    return(
      <a onClick={this.handleRedirect}>
        <li className={activeClass}>
        <img src={window.defaultAvatar} alt="avatar" className="avatar" />{name}
        </li>
      </a>
    )

  }
}

export default DirectMessagesListItem;