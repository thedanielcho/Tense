export const fetchAllUsers = (channelId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/channels/${channelId}/users`
  })
}