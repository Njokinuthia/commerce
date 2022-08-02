class Item < ApplicationRecord
   validates :price, :category, :description, presence: true
   belongs_to :user
end
