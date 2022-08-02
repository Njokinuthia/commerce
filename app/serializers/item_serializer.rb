class ItemSerializer < ActiveModel::Serializer
  attributes :id, :category, :description, :condition, :price, :image_url, :user_id
  belongs_to :user
end
