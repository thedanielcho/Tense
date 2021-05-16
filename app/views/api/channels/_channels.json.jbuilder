json.array! channels.each do |channel|
  json.extract! channel, :id, :name, :public?, :admin_id, :description, :created_at
end