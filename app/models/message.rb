class Message < ApplicationRecord

  validates :user_id, :messageable_id, :messageable_type, presence: true

  belongs_to :messageable,
    polymorphic: true
  
    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

end