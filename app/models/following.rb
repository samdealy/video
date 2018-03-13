class Following < ApplicationRecord
  validates :follower_id, uniqueness: { scope: :leader_id,
     message: "Once follow per user pair"}
  belongs_to :follower,
    class_name: :User

  belongs_to :leader,
    class_name: :User
end
