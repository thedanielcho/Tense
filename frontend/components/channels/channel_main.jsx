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
    this.props.requestMemberships(this.props.channel.id)
  }

  componentDidUpdate(){

  }


  render(){
    debugger
    let width = (this.props.pathName.includes('sidebar')) ?
      "channel-main thin" : "channel-main wide";

    let members = [];
    if (Object.keys(this.props.memberships).length > 0){
      members = this.props.users.filter(user => (
        (Object.keys(user).includes("membershipId") &&
        Object.keys(this.props.memberships).includes(user.membershipId.toString()))
      ))
    }

    let view = (
      <div className={width}>
        <ChannelMainHeader
          channel={this.props.channel}
          users={this.props.users}
          pathName={this.props.pathName}
          handleSidebar={this.handleSidebar}
          requestAllUsers={this.props.requestAllUsers}
          memberships={this.props.memberships}
          requestMemberships={this.props.requestMemberships}
        />
      </div>
    )
    debugger
    if(this.props.currentUser.membershipId &&
      Object.keys(this.props.memberships).includes(this.props.currentUser.membershipId.toString())){
        view = (
          <div className={width}>
            <ChannelMainHeader
              channel={this.props.channel}
              users={this.props.users}
              pathName={this.props.pathName}
              handleSidebar={this.handleSidebar}
              requestAllUsers={this.props.requestAllUsers}
              memberships={this.props.memberships}
              requestMemberships={this.props.requestMemberships}
            />
            <div className="messages-container">
              <div>Messages go here</div>
              <MessageForm
                channel={this.props.channel}
                users={this.props.users}
              />
            </div>
          </div>)
    }

    return(
      view
    )
  }
}

export default ChannelMain;