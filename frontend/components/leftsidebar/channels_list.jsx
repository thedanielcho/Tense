import React from 'react';
import ChannelsListItem from './channels_list_item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons'

class ChannelsList extends React.Component{
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
    <ul className="channels-list">
          {this.props.channels.map((channel) => {
            return <ChannelsListItem
              key={channel.id}
              channel={channel}
              pathName={this.props.pathName}
              handleRedirect={this.props.handleRedirect}
              />
          })}
          <li className="add-channel" onClick={() => this.props.openModal('channelCreate')}>
            <FontAwesomeIcon icon={faPlus} /> 
            <p>
              Add channel
            </p>
          </li>
        </ul> : <></>
    return(
      <li className="channels-list-container">
        <div onClick={this.handleShow} className="label">
          {caret}Channels:
        </div>
        {messageList}
      </li>
    )
  }
}

export default ChannelsList;