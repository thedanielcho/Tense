class Api::MessagesController < ApplicationController

  def index
    channel = Channel.find(params[:channel_id])
    @messages = Message.all.where(messageable_id: channel.id)
    render :index
  end

  def update

  end

  def destroy
    # debugger
    @message = Message.find(params[:id])
    if @message && @message.user == current_user
      @message.destroy
      render :show
    else
      render json: ["Not authorized to perform that action"], status: 401
    end
  end

end