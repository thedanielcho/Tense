class Api::MembershipsController < ApplicationController

  def index
    if params[:channel_id]
      channel = Channel.find(params[:channel_id])
      @memberships = Membership.all.where(
        memberable_id: channel.id,
        memberable_type: "Channel",
        )
    else
      direct_message = DirectMessage.find(params[:direct_message_id])
      @memberships = Membership.all.where(
        memberable_id: direct_message.id,
        memberable_type: "DirectMessage"
        )
    end
    render :index
  end

  def create
    if params[:channel_id]
      channel = Channel.find(params[:channel_id])
      @membership = Membership.new(membership_params)
      @membership.memberable_id = channel.id
      @membership.memberable_type = "Channel"
      @user = User.find(params[:membership][:user_id])
    else
      # direct_message = DirectMessage.find(params[:direct_message_id])
      # @membership = Membership.new(membership_params)
      # @membership.memberable_id = direct_message.id
      # @membership.memberable_type = "DirectMessage"
      # @user = User.find(params[:membership][:user_id])
    end
    if @membership.save
      render :show
    else
      render json: @membership.errors.full_messages, status: 401
    end
  end

  # def destroy
  #   if params[:channel_id]
  #     channel = Channel.find(params[:channel_id])
  #     @membership = Membership.find_by(
  #       user_id: params[user[:user_id]],
  #       memberable_id: channel_id,
  #       memberable_type: "Channel"
  #     )
  #     @membership.destroy
  #     render "/api/channels/#{channel.id}/show"
  #   else
  #     #DM
  #   end
  # end
  
  def destroy
    # debugger
    @membership = Membership.find(params[:id])
    @membership.destroy
    render :destroy_show
  end

  private
  def membership_params
    params.require(:membership).permit(:user_id)
  end

end