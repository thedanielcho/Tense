# Transform JSON request param keys from JSON-conventional camelCase to
# Rails-conventional snake_case:
ActionDispatch::Request.parameter_parsers[:json] = lambda { |raw_post|

  # Modified from action_dispatch/http/parameters.rb
  data = ActiveSupport::JSON.decode(raw_post)

  # Transform camelCase param keys to snake_case
  if data.is_a?(Array)
    data.map { |item| item.deep_transform_keys!(&:underscore) }
  else
    data.deep_transform_keys!(&:underscore)
  end

  # Return data
  data.is_a?(Hash) ? data : { '_json': data }
}

# ActionDispatch::Request.parameter_parsers[:json] = -> (raw_post) {
#   data = ActiveSupport::JSON.decode raw_post
#   data = { _json: data } unless data.is_a? Hash
#   data.deep_transform_keys! { |k| k.to_s.underscore.parameterize(separator: '_') }
#   data.with_indifferent_access
# }