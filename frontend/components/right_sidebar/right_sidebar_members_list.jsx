import React from 'react'

const RightSidebarMembersList = (props) => {
  debugger
  // let remove = props.admin ? <span onClick={() => props.openModal('channelDelete', member.id)}> remove</span> : ""
  // let remove = ""
  return (
    <ul className="members-list">
      {props.members.map((member)=>{
          return(
            <li key={member.id}>
              {member.displayName}
              {(props.admin && member.id !== props.currentUser.id && (!props.mainChannel)) ?
              <span onClick={() => props.openModal('memberDelete', member.membershipId)}> remove</span> : ""}
            </li>
          )
        }
      )}
    </ul>
  )
}

export default RightSidebarMembersList;