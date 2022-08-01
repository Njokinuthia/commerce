class UsersController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_message

  def create
    user = User.create!(user_params) 
    session[:user_id] = user.id
    
    render json: user, status: :created
  end

  private
  def user_params
    params.permit(:username, :email, :password)
  end

  def render_unprocessable_entity_message(invalid)
    render json: { errors: invalid.record.errors }
  end
end
