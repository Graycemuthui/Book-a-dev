class Api::V1::DevelopersController < ApplicationController
  load_and_authorize_resource
  def index
    @developers = Developer.all
    render json: @developers
  end

  def create
    developer = Developer.new(developer_params)
    if developer.save
      render json: developer
    else
      render json: { error: developer.errors.messages }, status: 422
    end
  end

  def destroy
    developer = Developer.find(params[:id])
    developer.destroy
    developers = Developer.all
    render json: developers
  end

  private

  def developer_params
    params.require(:developer).permit(:name, :photo, :email, :phone, :city, :bio, :github)
  end
end
