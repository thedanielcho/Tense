import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretSquareRight } from '@fortawesome/free-solid-svg-icons'
import snakifyObject from '../../util/snakify_util';

class MessageForm extends React.Component{
  constructor(props){
    debugger
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
    debugger
    e.preventDefault();
    const message = Object.assign({}, this.state);
    const snakeMessage = snakifyObject(message);
    this.props.subscription.speak(({ message: snakeMessage }));;
    this.setState({ body: "" });
  }

  render(){

    return(
      <div>
        <form className="message-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="message"
            onChange={this.handleInput("body")}
            placeholder={`Send a message to ${this.props.channel.name}`}
            value={this.state.body}
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