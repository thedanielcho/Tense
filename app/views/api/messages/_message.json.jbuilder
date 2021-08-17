json.extract! message, :id, :body, :user_id, :messageable_id, :messageable_type, :created_at
json.edited message.edited?