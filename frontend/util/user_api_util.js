export const fetchAllUsers = (channelId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/channels/${channelId}/users`
  })
}

export const fetchAllDMUsers = (directMessageId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/direct_messages/${directMessageId}/users`
  })
}