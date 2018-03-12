class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :video
  belongs_to :parent_comment,
    class_name: :Comment,
    optional: true
end
