class User < ApplicationRecord
  has_secure_password
  validates :username, :password, presence: true
  validates :email, uniqueness: true
  validates :password, { :length => { :in => 3...8}}

  has_many :items
end
