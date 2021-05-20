import React from 'react';
import { Route } from 'react-router';
import ChatRoom from '../messages/chat_room';
import ChatRoomContainer from '../messages/chat_room_container';
import MessageForm from '../messages/message_form';
import ChannelHeaderContainer from './channel_header_container';


class ChannelMain extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      sidebar: false
    };
    this.handleSidebar = this.handleSidebar.bind(this);
  }

  componentDidMount(){
    // this.props.requestAllMessages(this.props.channel.id)
  }

  handleSidebar(){
    this.setState({
      sidebar: !this.state.sidebar
    })
  }

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
    let channelView;
    if(this.props.currentUser.membershipId &&
      Object.keys(this.props.memberships).includes(this.props.currentUser.membershipId.toString())){
        channelView = (
          <Route path="/channel/:channelId" component={ChatRoomContainer} />
        )
    }

    return(
      <div className={width}>
        <Route path="/channel/:channelId" component={ChannelHeaderContainer} />
        {channelView}
      </div>
    )
  }
}

export default ChannelMain;