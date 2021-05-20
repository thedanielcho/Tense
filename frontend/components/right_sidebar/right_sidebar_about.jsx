import React from 'react'
import { extractDate } from '../../util/date_util'

const RightSidebarAbout = (props) => {

  return (
    <ul className="about-list">
      <li className="description">
        <h4>Description:</h4>
        <p>{(props.channel.description) ? props.channel.description : "No description"}</p>
      </li>
      <li className="created-on">
        <p>Created on {extractDate(props.channel.createdAt)}</p>
      </li>
    </ul>
  )
}

export default RightSidebarAbout