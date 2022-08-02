class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :category
      t.string :description
      t.string :condition
      t.string :price
      t.string :image_url
      t.string :user_id

      t.timestamps
    end
  end
end
