class Api::ChannelsController < ApplicationController

  def index
    # @channels = current_user.channels
    @channels = Channel.all.where(public?: true)
    render :index
  end

  def show
    @channel = Channel.find(params[:id])
    if @channel
      render :show
    else
      render json: ["Channel not found"], status: 404
    end
  end

  def create
    @channel = Channel.new(channel_params)
    @channel.admin_id = current_user.id
    if @channel.save
      Membership.create(
        user_id: current_user.id,
        memberable_id: @channel.id, 
        memberable_type: "Channel"
      )
      render :show
    else
      render json: @channel.errors.full_messages, status: 401
    end
  end

  def update
    @channel = Channel.find(params[:id])
    if @channel.update(channel_params)
      render :show
    else
      render json: @channel.errors.full_messages, status: 401
    end
  end

  def destroy
    @channel = Channel.find(params[:id])
    if @channel && @channel.admin == current_user
      @channel.destroy
      render json: {message: 'channel deleted'}
    else
      render json: ["Not authorized to perform that action"], status: 401
    end
  end

  private
  def channel_params
    params.require(:channel).permit(:name, :description, :public?)
  end

end