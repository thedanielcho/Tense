# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



User.destroy_all

Channel.destroy_all

Membership.destroy_all

user1 = User.create!(email: "thedanielcho@gmail.com", display_name: "Daniel Cho", password: "password")
user2 = User.create!(email: "demo@mail.com", display_name: "demo user", password: "password")

channel1 = Channel.create!(name: "general", description: "General chat for everyone", public?: true, admin_id: user1.id)
channel2 = Channel.create!(name: "test1", public?: true, admin_id: user1.id)
channel3 = Channel.create!(name: "test2", public?: true, admin_id: user1.id)

membership1 = Membership.create!(user_id: user1.id, memberable_type: "Channel", memberable_id: channel1.id)
membership2 = Membership.create!(user_id: user2.id, memberable_type: "Channel", memberable_id: channel1.id)
membership3 = Membership.create!(user_id: user1.id, memberable_type: "Channel", memberable_id: channel2.id)
membership4 = Membership.create!(user_id: user2.id, memberable_type: "Channel", memberable_id: channel2.id)
membership5 = Membership.create!(user_id: user1.id, memberable_type: "Channel", memberable_id: channel3.id)