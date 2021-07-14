import React from 'react';

class RightSidebarMembersListItem extends React.Component{
  constructor(props){
    super(props);
    this.handleRedirect = this.handleRedirect.bind(this)
  }

  handleRedirect(){
    debugger
    if(this.props.member == this.props.currentUser){
      debugger
      return null
    }
    debugger
    let directMessageId
    this.props.directMessages.forEach(dm => {
      if(Object.values(dm.users)[0].id === this.props.member.id){
        directMessageId = dm.id
      }
    })
    if (directMessageId){
      this.props.handleRedirect(directMessageId)
    } else {
      this.props.createDirectMessage(this.props.member.id)
      .then((action) => {
        this.props.handleRedirect(action.directMessage.id)
      })
    }
  }

  render(){
    return(
    <li key={this.props.member.id} onClick={this.handleRedirect}>
      {this.props.member.displayName}
      {(this.props.admin && this.props.member.id !== this.props.currentUser.id && (!this.props.mainChannel)) ?
      <span onClick={(e) => {
        if (e.stopPropagation) e.stopPropagation();
        this.props.openModal('memberDelete', this.props.member.membershipId)
      }
      }> remove</span> : ""}
    </li>
    )
  }
}

export default RightSidebarMembersListItem;