import React from 'react';
import ChannelsList from './channels_list';

class LeftSidebar extends React.Component{
  constructor(props){
    super(props);
    this.handleRedirect = this.handleRedirect.bind(this)
  }

  componentDidMount(){
    // this.props.requestAllChannels()
  }

  handleRedirect(channelId){
    let splitPath = this.props.pathName.split("/");
    splitPath[2] = channelId;
    let redirectPath = splitPath.join("/");

    this.props.history.push(redirectPath);

    this.props.requestAllUsers(channelId);
    this.props.requestMemberships(channelId)
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
        </ul>
      </div>
    )
  }
}

export default LeftSidebar;