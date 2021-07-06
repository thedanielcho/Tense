export const fetchMessages = (channelId) => {
  return $.ajax({
    method: "GET",
    url: `/api/channels/${channelId}/messages`
  })
}

export const destroyMessage = (id) => {
  debugger
  return $.ajax({
    method: "DELETE",
    url: `/api/messages/${id}`
  })
}