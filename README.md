# Tense

Tense is a clone of the prevalent messaging app "Slack". Through Tense, users can create and join channels and send live messages to chat with other users. You can access the live app [here](https://tense-app.herokuapp.com/#/).
## Technologies used
- Ruby on Rails back-end
- PostgreSQL database
- React/Redux front-end

## Features

- Create an account with just an email or try a demo!
- You just need an email and the name you want displayed
  - On the backend, we secure your information using BCrypt

<br></br>
![session-form](/app/assets/images/readme/account.gif)

### Live-messaging!
- Once you're logged in, you can see the real app!
- Send and receive messages in real time!
<br></br>
![messaging](/app/assets/images/readme/messaging.gif)

- To achieve this, I used the action cable feature built into Rails
- First I set up the backend for my channels in Rails
  - I set it up so that the multiple channels I have could each have their own subscriptions
 
``` Ruby
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
      userId: @message.user_id,
      body: @message.body,
      messageableId: @message.messageable_id,
      messageableType: @message.messageable_type,
      createdAt: @message.created_at
      }
    }
    ChatChannel.broadcast_to(@chat, socket)
  end

```
- Then I set up a subscription to set up a connection with specified channels on my front-end

``` Javascript
this.subscription = App.cable.subscriptions.create(
      { 
        channel: 'ChatChannel',
        type: 'Channel',
        chatId: this.props.channel.id,
      },
      {
        received: data => {
          this.setState.call(this, ({
            newMessages: this.state.newMessages + 1}));
        },
        speak: data => {
          return this.subscription.perform("speak", data);
        },
      }
    );
  }

```

### Channels
- Create or join channels for topics you want to discuss!
<br></br>
![messaging](/app/assets/images/readme/channel_creation.gif)

### Direct Messages
- Message users directly in a private direct message that only you two can see!
<br></br>
![messaging](/app/assets/images/readme/dm.gif)

### Search
- Look up channels or users with ease!
<br></br>
![messaging](/app/assets/images/readme/search.gif)

[Try it out!](https://tense-app.herokuapp.com/#/)

## Future Additions
- Live typing, so everyone can see you type the second you make a keystroke

