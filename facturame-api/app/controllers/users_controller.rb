class UsersController < ApplicationController

  def index
    render json: User.all, each_serializer: UserSerializer, root: false
  end
end
