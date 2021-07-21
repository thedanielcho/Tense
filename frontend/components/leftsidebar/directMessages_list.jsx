import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import DirectMessagesListItem from './directMessages_list_item';


class DirectMessagesList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      active: true
    };
    this.handleShow = this.handleShow.bind(this)
  }

  handleShow(){
    this.setState({
      active: !this.state.active
    })
  }

  render(){
    let caret = this.state.active ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretRight} />
    let messageList = (this.state.active) ? 
      <ul className="dm-list">
        {this.props.directMessages.map((directMessage) => {
          return <DirectMessagesListItem
            key={directMessage.id}
            directMessage={directMessage}
            pathName={this.props.pathName}
            handleRedirect={this.props.handleRedirect}
            currentUser={this.props.currentUser}
            />
        })}
      </ul> : <></>
    return(
      <li className="dm-list-container">
        <div onClick={this.handleShow} className="label">
          {caret}Direct Messages:
        </div>
        {messageList}
      </li>
    )
  }
}

export default DirectMessagesList;