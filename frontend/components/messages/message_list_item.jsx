import React from 'react';

const MessageListItem = (props) => {
  return(
    <li>
      <h1>{props.users[props.message.userId].displayName}</h1>
      <p>{props.message.body}</p>
      <p>channel {props.message.messageableId}</p>
      <div ref={props.bottom} />
    </li>
  )
}

export default MessageListItem;