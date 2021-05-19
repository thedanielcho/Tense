import React from 'react';
import { Route } from 'react-router';
import ChatRoom from '../messages/chat_room';
import ChatRoomContainer from '../messages/chat_room_container';
import MessageForm from '../messages/message_form';
import ChannelMainHeader from './channel_header';


class ChannelMain extends React.Component{

  constructor(props){
    super(props);
  }


  // componentDidMount(){

  //   this.props.requestAllUsers(this.props.channel.id)
  //   this.props.requestMemberships(this.props.channel.id)
  // }



  render(){

    let width = (this.props.pathName.includes('sidebar')) ?
      "channel-main thin" : "channel-main wide";

    // let members = [];
    // if (Object.keys(this.props.memberships).length > 0){
    //   members = this.props.users.filter(user => (
    //     (Object.keys(user).includes("membershipId") &&
    //     Object.keys(this.props.memberships).includes(user.membershipId.toString()))
    //   ))
    // }

    return(
      <ChannelMainHeader
        channel={this.props.channel}
        users={this.props.users}
        pathName={this.props.pathName}
        handleSidebar={this.handleSidebar}
        requestAllUsers={this.props.requestAllUsers}
        memberships={this.props.memberships}
        requestMemberships={this.props.requestMemberships}
      />
    )
  }
}

export default ChannelMain;