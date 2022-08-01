class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  # create new user
  def create
    user = User.create!(user_params) 
    session[:user_id] = user.id    
    render json: user, status: :created
  end

  # # autolog in already logged in user - not working
  # def show    
  #   user = User.find_by(id: session[:user_id])
  #   if user
  #    render json: user
  #   else
  #     render json: { error: "not logged in"}
  #   end
  # end
  

  # private routes
  private
  def user_params
    params.permit(:username, :email, :password)
  end

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors }
  end

   def render_not_found_response
    render json: { errors: "Not authorized" }, status: :unauthorized
  end

end
