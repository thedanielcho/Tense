json.array! @memberships.each do |membership|
  json.partial! 'api/memberships/membership', membership: membership
end