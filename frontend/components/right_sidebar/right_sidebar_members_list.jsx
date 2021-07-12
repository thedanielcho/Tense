import React from 'react'
import RightSidebarMembersListItem from './right_sidebar_members_list_item';

const RightSidebarMembersList = (props) => {
  // let remove = props.admin ? <span onClick={() => props.openModal('channelDelete', member.id)}> remove</span> : ""
  // let remove = ""
  return (
    <ul className="members-list">
      {props.members.map((member)=>{
        return <RightSidebarMembersListItem
          key={member.id}
          member={member}
          admin={props.admin}
          openModal={props.openModal}
          currentUser={props.currentUser}
          mainChannel={props.mainChannel}
          handleRedirect={props.handleRedirect}
          createDirectMessage={props.createDirectMessage}
          directMessages={props.directMessages}
        />
        }
      )}
    </ul>
  )
}

export default RightSidebarMembersList;