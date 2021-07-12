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

export const createDM = (user_id) => {
  return $.ajax({
    method: "POST",
    url: `api/direct_messages`,
    data: {user_id}
  })
}