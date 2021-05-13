class Channel < ApplicationRecord

  validates :name, presence: true
  validates :public?, inclusion: { in: [ true, false ] }
  validates :admin_id, presence: true

  belongs_to :admin,
  foreign_key: :admin_id,
  class_name: :User

  has_many :memberships,
  as: :memberable,
  dependent: :destroy

  has_many :users,
  through: :memberships,
  source: :user

end
