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
  }


  render(){
    return(
      <div className="channel">
        <ChannelMain
          channel={this.props.channel}
          users={this.props.users}
          pathName={this.props.pathName}
          requestAllUsers={this.props.requestAllUsers}
        />
        <Route
          path="/channel/:channelId/sidebar"
          render={props =>
            <RightSidebar
              {...props}
              users={this.props.users}
              channel={this.props.channel}
              pathName={this.props.pathName}
            />
          }
        />
      </div>
    )
  }
}

export default Channel;