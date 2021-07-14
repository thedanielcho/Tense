export const getChannelUsers = (memberships, users) => {
  let channelUsers = {};
  for(let i = 0; i < Object.values(users).length; i++){
    let user = Object.values(users)[i];
    if(memberships[user.membershipId]){
      channelUsers[user.id] = user
    }
  }
  // Object.values(users).forEach(user => {
  //   if(memberships[user.membershipId]){
  //     channelUsers[user.id] = user
  //     debugger
  //   }
  // })
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