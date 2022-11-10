class Api::V1::UsersController < ApplicationController
  load_and_authorize_resource
  def index
    @user = current_user
    render json: @user
  end
end
