class User < ApplicationRecord

  validates :email, presence:true, uniqueness:true
  validates :display_name, presence:true
  validates :password_digest, presence:true
  validates :password, length: {minimum:6, allow_nil:true}
  after_initialize :ensure_session_token

  attr_reader :password
  # FIGVAPER

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    if user && user.is_password?(password)
      user
    else
      nil
    end
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def is_password?(password)
    pass_obj = BCrypt::Password.new(self.password_digest)
    pass_obj.is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
    @password
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    save!
    self.session_token
  end

  def valid_email?

  end


end