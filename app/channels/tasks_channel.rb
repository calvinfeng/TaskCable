class TasksChannel < ApplicationCable::Channel
  # Channels are long-lived

  # The subscribed method defines where the messages are coming from when someone subscribes to this channel
  def subscribed
    stream_from 'tasks'
    stream_from 'task_items'
  end

  def speak(data)
    puts data
  end
end
