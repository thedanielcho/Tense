//index
export const fetchAllChannels = () => {
  return $.ajax({
    method: "GET",
    url: "/api/channels"
  })
}

//show
export const fetchChannel = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/channels/${id}`,
  })
}

//create
export const createChannel = (channel) => {
  return $.ajax({
    method: "POST",
    url: "/api/channels",
    data: { channel }
  })
}

//update
export const updateChannel = (id, channel) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/channels/${id}`,
    data: { channel }
  })
}

//destroy
export const destroyChannel = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/channels/${id}`
  })
}