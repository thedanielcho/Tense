import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretSquareRight } from '@fortawesome/free-solid-svg-icons'
import snakifyObject from '../../util/snakify_util';

class MessageEditForm extends React.Component{
  constructor(props){
    debugger
    super(props);
    this.state = {
      body: this.props.message.body,
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
      if(this.state.body === this.props.message.body){
        this.props.finishEdit();
        return
      }
      debugger
      this.props.message.body = this.state.body
      const message = this.props.message;
      const snakeMessage = snakifyObject(message);
      this.props.subscription.speak(({ message: snakeMessage, type: "edit" }));;
      this.setState({ body: "" });
      this.props.finishEdit()
    }
  }

  render(){
    let placeholder = this.props.channel ? this.props.channel.name : Object.values(this.props.directMessage.users)[0].displayName
    return(
      <div>
        <form className="message-edit-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="message"
            onChange={this.handleInput("body")}
            placeholder={`Send a message to ${placeholder}`}
            value={this.state.body}
            autoComplete="off"
          />
          <div>
            <button type="submit" className="submit">
              Save
            </button>
            <button onClick={this.props.finishEdit} className="cancel">
              Cancel
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default MessageEditForm