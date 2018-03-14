class User < ApplicationRecord
  validates :username, :password_digest, :session_token, :email, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_many :videos, foreign_key: :uploader_id, dependent: :destroy
  has_many :comments, dependent: :destroy

  has_many :followings_as_follower,
    class_name: :Following,
    foreign_key: :follower_id,
    dependent: :destroy

  has_many :followings_as_leader,
    class_name: :Following,
    foreign_key: :leader_id,
    dependent: :destroy

  has_many :leaders,
    through: :followings_as_follower,
    source: :leader

  has_many :followers,
    through: :followings_as_leader,
    source: :follower

  has_many :followed_videos,
    through: :leaders,
    source: :videos

  has_attached_file :image, default_url: "https://s3.amazonaws.com/fsp-video-pro/default_icon.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  attr_reader :password
  after_initialize :ensure_session_token

  def self.find_by_credentials(email, pw)
    user = User.find_by(email: email)
    user && user.is_password?(pw) ? user: nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = generate_unique_session_token
    save!
    self.session_token
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end

end
