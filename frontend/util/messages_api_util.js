export const fetchMessages = (channelId) => {
  return $.ajax({
    method: "GET",
    url: `/api/channels/${channelId}/messages`
  })
}
export const fetchDMMessage = (directMessageId) => {
  return $.ajax({
    method: "GET",
    url: `/api/direct_messages/${directMessageId}/messages`
  })
}

export const destroyMessage = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/messages/${id}`
  })
}