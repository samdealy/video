class Video < ApplicationRecord
  validates :title, presence: true

  belongs_to :uploader, class_name: :User
  
end
