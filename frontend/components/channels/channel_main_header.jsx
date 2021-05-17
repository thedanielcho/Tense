import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

class ChannelMainHeader extends React.Component{

  componentDidMount(){

  }

  componentDidUpdate(){

  }

  render(){
    debugger
    let redirectPath = (this.props.pathName.includes('sidebar')) ?
    `/channel/${this.props.channel.id}`
    : `/channel/${this.props.channel.id}/sidebar`;
    let iconClass = (this.props.pathName.includes('sidebar')) ?
     "activated" : "";
    return(
      
      <header>
        <h1>#{this.props.channel.name}</h1>
        <ul>
          <li>Members: {Object.keys(this.props.memberships).length}</li>
          <li>
            <FontAwesomeIcon icon={faUserPlus} />
          </li>
          <li className={iconClass} onClick={this.props.handleSidebar}>
            <NavLink to={redirectPath}>
              <FontAwesomeIcon icon={faInfoCircle} />
            </NavLink>
          </li>
        </ul>
      </header>
    )
  }
}

export default ChannelMainHeader;