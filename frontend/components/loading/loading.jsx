import React from 'react';

class Loading extends React.Component{

  componentDidMount(){
    this.props.history.push(`/channel/${this.props.channel.id}`);
  }

  render(){
    return(
      <></>
    )
  }
}

export default Loading;