import React from 'react';

class ChannelDeleteForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      checked: false
    }
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    let splitPath = this.props.history.location.pathname.split("/");
    splitPath[2] = "1";
    let redirectPath = splitPath.join("/");
    this.props.history.push(redirectPath);
    this.props.destroyChannel(this.props.channel.id)
      .then(this.props.closeModal)
      .then(()=>{
        this.props.requestAllMessages(1);
        this.props.requestAllChannels()
      })
  }

  handleCheckbox(){
    this.setState({
      checked: !this.state.checked
    })
  }

  render(){
    let button = this.state.checked ? 
    <button type='submit' >Delete</button>
    : <button type='submit' disabled>Delete</button>

    return(
      <div className="create-channel-container">
      <h2>Delete this channel?</h2>
      <h4>When you delete a channel, all messages from this channel will be removed from Tense immediately. This can’t be undone.</h4>
      <form onSubmit={this.handleSubmit} className="channel-create-form">
        <div className="private-toggle">
          <label htmlFor="private?">Yes, I'm sure</label>
          <label className="switch">
            <input
              id="private?"
              type="checkbox"
              value={this.state.public}
              onChange={this.handleCheckbox}
            />
            <span id="private?" className="slider round"></span>
          </label>
        </div>
        <div className='submit-container'>
          {button}
        </div>
      </form>
    </div>
    )
  }
}

export default ChannelDeleteForm;