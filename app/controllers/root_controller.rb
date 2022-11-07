# frozen_string_literal: true

class RootController < ApplicationController
  before_action :authenticate_user!
  def index; end
end
