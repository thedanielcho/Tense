export const fetchAllDMs = () => {
  return $ajax({
    method: "GET",
    url: "/api/direct_messages"
  })
}

export const fetchDM = (id) => {
  return $ajax({
    method: "GET",
    url: `api/direct_messages/${id}`
  })
}

export const createDM = (userId) => {
  return $.ajax({
    method: "POST",
    url: `api/direct_messages`,
    data: {userId}
  })
}