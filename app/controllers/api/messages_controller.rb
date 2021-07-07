class Api::MessagesController < ApplicationController

  def index
    if params[:channel_id]
      channel = Channel.find(params[:channel_id])
      @messages = Message.all.where(
        messageable_type: "Channel"
        messageable_id: channel.id,
        )
    else
      direct_message = DirectMessage.find(params[:direct_message_id])
      @messages = Message.all.where(
        messageable_type: "DirectMessage"
        messageable_id: direct_message.id,
        )
    end
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