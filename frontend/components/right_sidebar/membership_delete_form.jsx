import React from "react";

class MembershipDeleteForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      checked: false
    }
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    debugger
    e.preventDefault();
    this.props.destroyMembership(this.props.membershipId).then(this.props.closeModal)
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
      <h2>Remove this user?</h2>
      <h4>Are you sure you wish to remove this user?</h4>
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

export default MembershipDeleteForm