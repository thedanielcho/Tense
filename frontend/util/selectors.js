export const getChannelUsers = (memberships, users) => {
  debugger
  let channelUsers = {};
  Object.values(users).forEach(user => {
    if(memberships[user.membershipId]){
      channelUsers[user.id] = user
    }
  })
  return channelUsers;
}

export const getDMUsers = (directMessage, currentUser) => {
  let dmUsers = {};
  Object.values(directMessage.users).forEach(user=>{
    dmUsers[user.id] = user
  })
  dmUsers[currentUser.id] = currentUser
  return dmUsers;
}