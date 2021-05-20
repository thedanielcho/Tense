import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag } from '@fortawesome/free-solid-svg-icons'
import { render } from 'react-dom';


class ChannelsListItem extends React.Component{

 constructor(props){
   super(props);
   this.handleRedirect = this.handleRedirect.bind(this)
 }

  handleRedirect(){
    this.props.handleRedirect(this.props.channel.id)
  }

  render(){
    debugger
    let activeClass = (this.props.pathName.split("/")[2] === this.props.channel.id.toString()) ? 'active' : '';

    return(
      <a onClick={this.handleRedirect}>
        <li className={activeClass}>
        <FontAwesomeIcon icon={faHashtag} />{this.props.channel.name}
        </li>
      </a>
    )

  }
}

export default ChannelsListItem;