class Item < ApplicationRecord
   # validates :price, :description, presence: true
   belongs_to :user
end
