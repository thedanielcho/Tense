import React from 'react'

const RightSidebarMembersList = (props) => {
  debugger
  return (
    <ul className="members-list">
      {props.members.map((member)=>{
          return(
            <li key={member.id}>{member.displayName}</li>
          )
        }
      )}
    </ul>
  )
}

export default RightSidebarMembersList;