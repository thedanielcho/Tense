# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


users = User.create([
  {email: "thedanielcho@gmail.com", display_name: "Daniel Cho", password: "password"},
  {email: "demo@mail.com", display_name: "demo user", password: "password"}
])

channels = Channel.create([
  {name: "general", description: "General chat for everyone", public?: true, admin_id: 1},
  {name: "test1", public?: true, admin_id: 1},
  {name: "test2", public?: true, admin_id: 1},
])

memberships = Membership.create([
  {user_id: 1, memberable_type: "Channel", memberable_id: 1}
  {user_id: 2, memberable_type: "Channel", memberable_id: 1}
])

