# frozen_string_literal: true

module Api
  module V1
    class DevelopersController < ApplicationController
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

      private

      def developer_params
        params.require(:developer).permit(:name, :photo, :email, :phone, :city, :bio, :github)
      end
    end
  end
end
