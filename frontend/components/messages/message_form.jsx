import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretSquareRight } from '@fortawesome/free-solid-svg-icons'

class MessageForm extends React.Component{

  render(){
    return(
      <form className="message-form">
        <input type="text" id="message" placeholder={`Send a message to ${this.props.channel.name}`} />
        <div className="submit">
          <FontAwesomeIcon icon={faCaretSquareRight} />
        </div>
      </form>
    )
  }
}

export default MessageForm