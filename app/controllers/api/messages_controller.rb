class Api::MessagesController < ApplicationController

  def index
    channel = Channel.find(params[:channel_id])
    @messages = Message.all.where(messageable_id: channel.id)
    render :index
  end

  def update

  end

  def destroy

  end

end