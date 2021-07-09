json.extract! direct_message, :id
  json.set! :users do
    direct_message.users.each do |user|
      unless user == current_user
        json.set! user.id do
          json.extract! user, :id, :display_name, :email
        end
      end
    end
  end