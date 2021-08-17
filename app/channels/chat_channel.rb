class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    @chat_type = params[:type]
    @chat = @chat_type.constantize.find_by(id: params[:chatId])
    stream_for @chat if @chat
  end
  def speak(data)
    if data["type"] == "create"
      @message = Message.create(
        body: data["message"]["body"],
        user_id: data["message"]["user_id"],
        messageable_id: @chat.id,
        messageable_type: @chat_type
      )
    elsif data["type"] == "edit"
      @message = Message.find(data["message"]["id"])
      @message.body = data["message"]["body"]
      # debugger
      if !@message.edited?
        @message.toggle!(:edited?)
      end
      # debugger
      @message.save
      # debugger
    end
    socket = { 
      message: {
      id: @message.id,
      userId: @message.user_id,
      body: @message.body,
      messageableId: @message.messageable_id,
      messageableType: @message.messageable_type,
      createdAt: @message.created_at,
      edited: @message.edited?
      }
    }
    ChatChannel.broadcast_to(@chat, socket)
  end

  def load
    messages = Message.where(messageable_id: @chat.id).order(:created_at)
    socket = { messages: messages, type: 'messages' }
    ChatChannel.broadcast_to(@chat, socket)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
