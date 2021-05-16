import React from 'react'

const RightSidebarMembersList = (props) => {
  return (
    <ul className="members-list">
      {props.users.map((user)=>{
        return(
          <li key={user.id}>{user.displayName}</li>
        )
      })}
    </ul>
  )
}

export default RightSidebarMembersList;