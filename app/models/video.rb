class Video < ApplicationRecord
  validates :uploader_id, uniqueness: { scope: :title, message: "video titles must be unique"},
    unless: Proc.new {|video| video.title.blank? }

  belongs_to :uploader, class_name: :User

  has_attached_file :clip, styles: {
    :medium => {
      :geometry => "640x480",
      :format => 'mp4'
    },
    :thumb => { :geometry => "300x170", :format => 'jpeg', :time => 10}
    }, :processors => [:transcoder]
  validates_attachment_content_type :clip, content_type: /\Avideo\/.*\Z/

end
