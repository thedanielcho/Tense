class DirectMessage < ApplicationRecord

  has_many :memberships,
  as: :memberable,
  dependent: :destroy

  has_many :users,
  through: :memberships,
  source: :user

  has_many :messages,
  as: :messageable,
  dependent: :destroy

end