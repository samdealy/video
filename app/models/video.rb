class Video < ApplicationRecord
  validates :title, presence: true
  validates :uploader_id, uniqueness: { scope: :title, message: "Unique titles please!"}
  belongs_to :uploader, class_name: :User

end
