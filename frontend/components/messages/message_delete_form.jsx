import React from 'react';

class MessageDeleteForm extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.destroyMessage(this.props.message.id).then(this.props.closeModal)
  }

  render(){
    // let button = this.state.checked ? 
    // <button type='submit' >Delete</button>
    // : <button type='submit' disabled>Delete</button>

    return(
    <div className="create-channel-container">
      <h2>Delete message</h2>
      <h4>Are you sure you wish to delete this message? This cannot be undone.</h4>
      <form onSubmit={this.handleSubmit} className="channel-create-form">
        <div className='submit-container'>
        <button type='submit' >Delete</button>
        </div>
      </form>
    </div>
    )
  }
}

export default MessageDeleteForm;