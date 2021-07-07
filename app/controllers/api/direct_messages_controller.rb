class Api::DirectMessagesController < ApplicationController

  def index
    @direct_messages = current_user.direct_messages
    render :index
  end

  def show
    @direct_message = DirectMessage.find(params[:id])
    if @direct_message
      render :show
    else
      render json: ["Channel not found"], status: 404
    end
  end

  def create
    @direct_message = DirectMessage.new
    if @direct_message.save
      Membership.create(
        user_id: current_user.id,
        memberable_id: @direct_message.id,
        memberable_type: "DirectMessage"
      )
      Membership.create(
        user_id: params.user.id,
        memberable_id: @direct_message.id,
        memberable_type: "DirectMessage"
      )
      render :show
    else
      render json: @direct_message.errors.full_messages, status: 401
    end
  end 

end