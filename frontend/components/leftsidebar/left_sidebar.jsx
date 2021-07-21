import React from 'react';
import { Route } from 'react-router';
import ChannelsList from './channels_list';
import DirectMessagesList from './directMessages_list';

class LeftSidebar extends React.Component{
  constructor(props){
    super(props);
    this.handleRedirect = this.handleRedirect.bind(this)
  }

  componentDidMount(){
    // this.props.requestAllChannels()
  }

  handleRedirect(id, type){
    let splitPath = this.props.pathName.split("/");
    splitPath[1] = type
    splitPath[2] = id;
    let redirectPath = splitPath.join("/");
    this.props.history.push(redirectPath);
    if(type === "channel"){
      this.props.requestMemberships(id);
      this.props.requestAllUsers(id);
    } else{
      this.props.requestAllDMMessages(id);
      this.props.requestAllDMUsers(id);
    }
   }

  render(){
    return(
      <div className="left-sidebar">
        <div className="display-name-container">
          <h2 className="display-name" >{this.props.currentUser.displayName}</h2>
        </div>
        <ul className="sidebar-elements">
          <ChannelsList
            channels={this.props.channels}
            pathName={this.props.pathName}
            handleRedirect={this.handleRedirect}
            openModal={this.props.openModal}
          />
          <DirectMessagesList
            directMessages={this.props.directMessages}
            pathName={this.props.pathName}
            handleRedirect={this.handleRedirect}
            currentUser={this.props.currentUser}
          />
        </ul>
      </div>
    )
  }
}

export default LeftSidebar;