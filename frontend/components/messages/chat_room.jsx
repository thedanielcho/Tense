import React from "react";
import { extractDateTime } from "../../util/date_time_util";
import { extractDate } from "../../util/date_util";
import MessageForm from "./message_form";
import MessageListItem from "./message_list_item";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

class ChatRoom extends React.Component{
  constructor(props){
    super(props);
    this.state = {newMessages: 0 };
    this.bottom = React.createRef();

    
  }

  componentDidMount(){
    this.props.requestAllMessages(this.props.channel.id)
    this.subscription = App.cable.subscriptions.create(
      { 
        channel: 'ChatChannel',
        type: 'Channel',
        chatId: this.props.channel.id,
      },
      {
        received: data => {
          this.setState.call(this, ({
            newMessages: this.state.newMessages + 1}));
        },
        speak: data => {
          return this.subscription.perform("speak", data);
        },
      }
    );
  }

  componentDidUpdate() {
    if(!this.subscription.identifier.split(",")[2].includes(`${this.props.channel.id}`)){
      this.subscription = App.cable.subscriptions.create(
        { 
          channel: 'ChatChannel',
          type: 'Channel',
          chatId: this.props.channel.id,
        },
        {
          received: data => {
            this.setState.call(this, ({
              newMessages: this.state.newMessages + 1}));
          },
          speak: data => {
            return this.subscription.perform("speak", data);
          },
        }
      );
      this.props.requestAllMessages(this.props.channel.id)
    }
  
    if(this.state.newMessages > 0){
      this.setState({
        newMessages: 0
      })
      this.props.requestAllUsers(this.props.channel.id)
      this.props.requestAllMessages(this.props.channel.id)
    }
    if(this.bottom.current){
      this.bottom.current.scrollIntoView();
    }
  }

  componentWillUnmount(){
    // this.subscription.unsubscribed()
  }

  render(){
    // if(this.state.messages[0] !== this.props.messages[0]){
    //   this.handleUpdate()
    // }
    // const messageList = this.state.messages.map((message)=>{
    //   return (
    //     <MessageListItem message={message} users={this.props.users} bottom={this.bottom}/>
    //   );
    // });
    // let channelView = (<ul className="message-list" ref={this.bottom}></ul>);
    // if(this.state.messages[0] === this.props.messages[0]){
    //   channelView = (
    //     <ul className="message-list" ref={this.bottom}>
    //       {this.state.messages.map((message) => {
    //         let user = (lastUser === this.props.users[message.userId]) ?
    //         <></> : <h1>{this.props.users[message.userId].displayName}</h1>;
    //         lastUser = this.props.users[message.userId]
    //         return (
    //           <li key={message.id}>
    //             {user}
    //             <p>{message.body}</p>
    //             <p>channel {message.messageableId}</p>
    //             <div ref={this.bottom} />
    //           </li>
    //         )
    //       })}
    //     </ul>
    //   )
    // }
    
    let lastUser;
    let lastDate;
    
    let messagesList = this.props.messages.slice();
    messagesList.reverse()
    debugger
    if(this.props.messages.length > 0  && this.props.channel.id !== this.props.messages[0].messageableId){
      return null;
    }
    return(
      <div className="chatroom-container">
          <ul className="message-list">
            {this.props.messages.map((message, idx) => {
              if(this.props.users[message.userId]){
                let className = (lastDate === extractDate(message.createdAt)) || idx == 0 ? "" : "first";
                let user = (lastUser === this.props.users[message.userId]) &&
                (lastDate === extractDate(message.createdAt)) ?
                <></> : <div className={"name-and-date"}>
                          <h1>{this.props.users[message.userId].displayName}</h1>
                          <h5>{extractDateTime(message.createdAt)}</h5>
                        </div>;
                let img = (lastUser === this.props.users[message.userId])&&
                (lastDate === extractDate(message.createdAt)) ?
                <div className="avatar"/> : <img src={window.defaultAvatar} alt="avatar" className="avatar" />;
                lastUser = this.props.users[message.userId];
                lastDate = extractDate(message.createdAt);
                let deleteButton = (this.props.currentUser.id === message.userId) ? 
                <div className="delete-button" onClick={() => this.props.openModal('messageDelete', message)}>
                  <FontAwesomeIcon icon={faTrashAlt} />
                </div> : <></>
                return (
                  <li key={message.id} className={className}>
                    <div className="message-avatar">
                      {img}
                      <div className="message-container">
                        {user}
                        <p>{message.body}</p>
                        <div ref={this.bottom} />
                      </div>
                    </div>
                    {deleteButton}
                  </li>
                )
                
              }
            })}
          </ul>
        <MessageForm channel={this.props.channel} subscription={this.subscription} currentUser={this.props.currentUser}/>
      </div>
    )
  }
}


export default ChatRoom;