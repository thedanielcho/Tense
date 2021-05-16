export const createMembership = (memberableId, memberableType, membership) => {
  return $.ajax({
    method: "POST",
    url: `/api/${memberableType.toLowerCase()}s/${memberableId}/memberships`,
    data: { membership }
  })
}

export const destroyMembership = (membershipId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/memberships/${membershipId}`,
  })
}