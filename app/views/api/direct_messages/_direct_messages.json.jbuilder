json.array! direct_messages.each do |direct_message|
  direct_message.users.each do |user|
    unless user == current_user
      json.set! user.id do
        json.extract! user, :id, :display_name, :email
      end
    end
  end
end