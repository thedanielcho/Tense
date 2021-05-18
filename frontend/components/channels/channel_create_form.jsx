import React from 'react';
import snakifyObject from '../../util/snakify_util';

class ChannelCreateForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      description: '',
      public: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  handleSubmit(e){

    e.preventDefault();
    const channel = Object.assign({}, this.state);
    let railsReadyChannel = snakifyObject(channel);
    railsReadyChannel["public?"] = channel.public;

    this.props.createChannel(railsReadyChannel).then(this.props.closeModal);
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
    <button type='submit' >Create</button>
    : <button type='submit' disabled>Create</button>

    return(
      <div className="create-channel-container">
      <h2>Create a Channel</h2>
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
        <div className="private-toggle">
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
        </div>
        <div className='submit-container'>
          {button}
        </div>
      </form>
    </div>
    )
  }
}

export default ChannelCreateForm;