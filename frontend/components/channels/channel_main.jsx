import React from 'react';
import MessageForm from '../messages/message_form';
import ChannelMainHeader from './channel_main_header';


class ChannelMain extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      sidebar: false
    }
    this.handleSidebar = this.handleSidebar.bind(this)
  }

  handleSidebar(){
    this.setState({
      sidebar: !this.state.sidebar
    })
  }

  componentDidMount(){
    this.props.requestAllUsers(this.props.channel.id)
  }


  render(){
    debugger
    let width = (this.props.pathName.includes('sidebar')) ?
      "channel-main thin" : "channel-main wide"
    return(
      <div className={width}>
        <ChannelMainHeader
          channel={this.props.channel}
          users={this.props.users}
          pathName={this.props.pathName}
          handleSidebar={this.handleSidebar}
          requestAllUsers={this.props.requestAllUsers}
        />
        <div className="messages-container">
          <div>Messages go here</div>
          <MessageForm
            channel={this.props.channel}
            users={this.props.users}
          />
        </div>
      </div>
    )
  }
}

export default ChannelMain;