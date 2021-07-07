class Api::UsersController < ApplicationController

  def index 
    if params[:channel_id]
      @channel = Channel.find(params[:channel_id])
      @users = @channel.users
    else
      @direct_message = DirectMessage.find(params[:direct_message_id])
      @users = @direct_message.users
    end
    render :index
  end

  def create
    @user = User.new(user_params)
    if @user.save
      Membership.create(user_id: @user.id, memberable_id: 1, memberable_type: "Channel")
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :display_name)
  end

end