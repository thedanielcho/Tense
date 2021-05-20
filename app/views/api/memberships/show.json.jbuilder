json.set! "membership" do
  json.partial! 'api/memberships/membership', membership: @membership
end

json.set! "user" do 
  json.partial! '/api/users/user', user: @user
end