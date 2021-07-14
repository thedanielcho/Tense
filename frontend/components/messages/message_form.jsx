import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretSquareRight } from '@fortawesome/free-solid-svg-icons'
import snakifyObject from '../../util/snakify_util';

class MessageForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      body: "",
      userId: this.props.currentUser.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type){
    return e => {
      this.setState({
        [type]: e.currentTarget.value
      })
    }
  }

  handleSubmit(e){
    
    e.preventDefault();
    if(this.state.body !== ""){
      const message = Object.assign({}, this.state);
      const snakeMessage = snakifyObject(message);
      this.props.subscription.speak(({ message: snakeMessage }));;
      this.setState({ body: "" });
    }
  }

  render(){
    debugger
    let placeholder = this.props.channel ? this.props.channel.name : Object.values(this.props.directMessage.users)[0].displayName
    return(
      <div>
        <form className="message-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="message"
            onChange={this.handleInput("body")}
            placeholder={`Send a message to ${placeholder}`}
            value={this.state.body}
            autoComplete="off"
          />
          <button type="submit" className="submit">
            <FontAwesomeIcon icon={faCaretSquareRight} />
          </button>
        </form>
      </div>
    )
  }
}

export default MessageForm