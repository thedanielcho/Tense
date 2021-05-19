import React from "react";
import MessageForm from "./message_form";

class ChatRoom extends React.Component{
  constructor(props){
    super(props);
    this.state = {messages: [] };
    this.bottom = React.createRef();
    debugger
    this.subscription = App.cable.subscriptions.create(
      { 
        channel: 'ChatChannel',
        type: 'Channel',
        chatId: this.props.channel.id,
      },
      {
        received: data => {
          this.setState.call(this, ({
            messages: this.state.messages.concat(data.message)
          }));
        },
        speak: data => {
          return this.subscription.perform("speak", data);
        }
      }
    );
  }

  componentDidUpdate() {
    
    this.bottom.current.scrollIntoView();
  }

  render(){
    const messageList = this.state.messages.map((message)=>{
      
      return (
        <li key={message.id}>
          {message.body}
          <div ref={this.bottom} />
        </li>
      );
    });
    return(
      <div className="chatroom-container">
        <div className="message-list" ref={this.bottom}>
          {messageList}
        </div>
        <MessageForm channel={this.props.channel} subscription={this.subscription} currentUser={this.props.currentUser}/>
      </div>
    )
  }
}


export default ChatRoom;