import React from 'react';

class Channel extends React.Component{
  constructor(props){
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout(){
    debugger
    this.props.logout()
  }

  render(){
    debugger
    return(
      <div>
        <h2>This is where the channel would live</h2>
        <button onClick={this.handleLogout}>Log Out</button>
      </div>
    )
  }
}

export default Channel;