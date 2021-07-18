class UsersController < ApplicationController

  def index
    render json: User.all, each_serializer: UserSerializer, root: false
  end


  def new
    @user = User.new
  end

  def create
    @user = User.new( user_params )
    @user.save
    render(
          json: UserSerializer.new(@user).to_json,
          status: 201,
          location: user_path(@user.id)
    )
  end

  private

  def user_params
      params.require(:user).permit(:issuer_name, :date_issued, :issuer_rfc, :cfdi_xml, :total_amount, :user_id )
  end


end
