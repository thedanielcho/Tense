import React from 'react';
import { Route } from 'react-router';
import ChannelMain from './channel_main';
import RightSidebar from '../right_sidebar/right_sidebar';

class Channel extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){

    this.props.requestAllChannels()

    this.props.requestMemberships(this.props.channel.id)
    
  }


  render(){

    return(
      <div className="channel">
        <ChannelMain
          channel={this.props.channel}
          users={this.props.users}
          pathName={this.props.pathName}
          requestAllUsers={this.props.requestAllUsers}
          requestAllChannels={this.props.requestAllChannels}
          memberships={this.props.memberships}
          requestMemberships={this.props.requestMemberships}
          currentUser={this.props.currentUser}
        />
        <Route
          path="/channel/:channelId/sidebar"
          render={props =>
            <RightSidebar
              {...props}
              users={this.props.users}
              channel={this.props.channel}
              pathName={this.props.pathName}
              memberships={this.props.memberships}
            />
          }
        />
      </div>
    )
  }
}

export default Channel;