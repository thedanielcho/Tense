import React from 'react';
import { Route } from 'react-router';
import ChannelMain from './channel_main';
import RightSidebar from '../right_sidebar/right_sidebar';
import right_sidebar_container from '../right_sidebar/right_sidebar_container';
import ChanelHeaderContainer from './channel_header_container';
import ChatRoomContainer from '../messages/chat_room_container';

class Channel extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      sidebar: false
    };
    this.handleSidebar = this.handleSidebar.bind(this);
  }

  handleSidebar(){
    this.setState({
      sidebar: !this.state.sidebar
    })
  }

  componentDidMount(){
    this.props.requestAllUsers(this.props.channel.id)
    this.props.requestMemberships(this.props.channel.id)
  }



  render(){
    let width = (this.props.pathName.includes('sidebar')) ?
    "channel-main thin" : "channel-main wide";
    
    let channelView;

    if(this.props.currentUser.membershipId &&
      Object.keys(this.props.memberships).includes(this.props.currentUser.membershipId.toString())){
        channelView = (
          <Route path="/channel/:channelId" component={ChatRoomContainer} />
        )
    }
    return(
      <div className="channel">
        <div className={width}>
            <Route path="/channel/:channelId" component={ChanelHeaderContainer} />
            {channelView}
          </div>
        <Route path="/channel/:channelId/sidebar" component={right_sidebar_container} />
      </div>
    )
  }
}

export default Channel;