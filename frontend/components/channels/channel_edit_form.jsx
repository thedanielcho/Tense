import React from 'react';
import snakifyObject from '../../util/snakify_util';

class ChannelEditForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: this.props.channel.name,
      description: this.props.channel.description,
      public: this.props.channel.public
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const channel = Object.assign({}, this.state);
    let railsReadyChannel = snakifyObject(channel);
    railsReadyChannel["public?"] = channel.public;
    // railsReadyChannel["id"] = this.props.channel.id;
    this.props.updateChannel(this.props.channel.id, railsReadyChannel).then(this.props.closeModal);
  }

  handleCheckbox(){

    this.setState({
      public: !this.state.public
    })
  }

  handleInput(type) {

    return (e) => {
      this.setState({
        [type]: e.target.value
      })
    }
  }

  render(){
    let button = this.state.name.length > 1 ? 
    <button type='submit' >Edit</button>
    : <button type='submit' disabled>Edit</button>

    return(
      <div className="create-channel-container">
      <h2>Edit channel</h2>
      <h4>Channels are where your team communicates. They're best when organized around a topic</h4>
      <form onSubmit={this.handleSubmit} className="channel-create-form">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={this.state.name}
          onChange={this.handleInput("name")}
          placeholder="e.g. plan-budget"
        />
        <label htmlFor="description">Description <span>(optional)</span></label>
        <input
          id="description"
          type="text"
          value={this.state.description}
          onChange={this.handleInput("description")}
          placeholder=""
        />
        {/* <div className="private-toggle">
          <label htmlFor="private?">Make Private?</label>
          <label className="switch">
            <input
              id="private?"
              type="checkbox"
              value={this.state.public}
              onChange={this.handleCheckbox}
            />
            <span id="private?" className="slider round"></span>
          </label>
        </div> */}
        <div className='submit-container'>
          {button}
        </div>
      </form>
    </div>
    )
  }
}

export default ChannelEditForm