export const getChannelUsers = (memberships, users) => {
  let channelUsers = [];
  Object.values(users).forEach(user => {
    if(memberships[user.membershipId]){
      channelUsers.push(user)
    }
  })
  return channelUsers;
}

export const getDMUsers = (directMessage, currentUser) => {
  let dmUsers = [];
  Object.values(directMessage.users).forEach(user=>{
    dmUsers.push(user)
  })
  dmUsers.push(currentUser)
  return dmUsers;
}