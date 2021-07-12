import React from 'react';
import { Route } from 'react-router';
import ChatRoomDMContainer from '../messages/chat_room_dm_container';
import DirectMessageHeaderContainer from './direct_message_header_container';

class DirectMessage extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    debugger
    this.props.requestAllUsers(this.props.directMessage.id);
    // this.props.requestAllMessages(this.props.directMessage.id);
  }

  render(){
    return(
    <div className="directMessage">
      <div className="directMessage-main">
        <Route path="/dm/:directMessageId" component={DirectMessageHeaderContainer}/>
        <Route path="/dm/:directMessageId" component={ChatRoomDMContainer}/>
      </div>
    </div>
    )
  }
}

export default DirectMessage;