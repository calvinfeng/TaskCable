# Real Time Update
This is for trying out Rails 5 ActionCable. The objective is to see how does model update trigger an emission of websocket message to client/subscriber.

A client can create task and every other clients will receive the updates in real time using WebSocket technology

## Setup

### Task model
Use scaffold to save time
```
bundle exec rails g scaffold api::task title:string description:text completed:boolean
```

Rails magic is amazing...

Then set up database and run migration
```
bundle exec rails db:create
bundel exec rails db:migrate
```

### Task channel
Channels in Rails 5 are long-lived, so they can also share instance variable across callbacks. You can think of a channel like a form of controller, but one that is capable of pushing content to the subscriber.

Channels do not follow RESTful constraint. Action Cable operates through a remote-procedure called model. You can delcare any public method on the channel. This method is automatically exposed as a callable to the client.

```ruby
class TasksChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'tasks'
  end

  def unsubscribed
    # Implementation...
  end

  def receive(data)
    # Implementation...
  end

  def speak(data)
    # Implementation...
  end

  def appear(data)
    # Implementation...
  end

  def away
    # Implementation...
  end
end
```

Add broadcast to Task model

```ruby
def broadcast_save
  ActionCable.server.broadcast(
    'tasks',
    status: 'saved',
    id: id,
    title: title,
    description: description,
    completed: completed
  )
end

def broadcast_delete
  ActionCable.server.broadcast(
    'tasks',
    status: 'deleted',
    id: id,
    title: title
  )
end
```
