class Membership < ApplicationRecord

  validates :user_id, uniqueness: { scope: [:memberable_id, :memberable_type] }
  validates :user_id, presence: true
  validates :memberable_id, :memberable_type, presence: true

  belongs_to :memberable,
    polymorphic: true

  belongs_to :user,
  foreign_key: :user_id,
  class_name: :User
  
end