import React from 'react'

const RightSidebarAbout = (props) => {
  debugger
  return (
    <ul className="about-list">
      <li className="description">
        <h4>Description:</h4>
        <p>{(props.channel.description) ? props.channel.description : "No description"}</p>
      </li>
      <li className="created-on">
        <p>Created on {props.channel.createdAt.split("T")[0]}</p>
      </li>
    </ul>
  )
}

export default RightSidebarAbout