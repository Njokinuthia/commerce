class ItemsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def index
    items = Item.all
    render json: items
  end

  def create
    item = Item.create!(item_params)
    byebug
    render json: item


  end
 
  private
  def item_params
    params.permit(:category, :description, :condition, :price, :image_url,:user_id)
  end

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors }
  end

   def render_not_found_response
    render json: { errors: "Not authorized" }, status: :unauthorized
  end

end
