class Video < ApplicationRecord
  validates :title, presence: true
  validates :uploader_id, uniqueness: { scope: :title, message: "video titles must be unique"}
  belongs_to :uploader, class_name: :User

end
