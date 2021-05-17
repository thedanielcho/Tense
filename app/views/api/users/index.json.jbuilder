json.array! @users.each do |user|
  json.partial! 'api/users/user', user: user
  if @channel
    json.membershipId Membership.find_by(user_id: user.id, memberable_id: @channel.id, memberable_type: "Channel").id
  end
end