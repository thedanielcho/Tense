class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    chat_type = params[:type]
    @chat = chat_type.constantize.find_by(id: params[:chatId])
    stream_for @chat if @chat
  end
  def speak(data)
    @message = Message.create(
      body: data["message"]["body"],
      user_id: data["message"]["user_id"],
      messageable_id: @chat.id,
      messageable_type: "Channel"
    )
    socket = { 
      message: {
      id: @message.id,
      user_id: @message.user_id,
      body: @message.body,
      messageable_id: @message.messageable_id,
      messageable_type: @message.messageable_type,
      created_at: @message.created_at
      } 
    }
    ChatChannel.broadcast_to(@chat, socket)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
