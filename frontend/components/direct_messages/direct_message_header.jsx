import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

class DirectMessageHeader extends React.Component{

  render(){
    let otherUser = Object.values(this.props.directMessage.users)[0];
    return(
      <header>
        <h1>{otherUser.displayName}</h1>
      </header>
    )
  }
}

export default DirectMessageHeader;