class TasksChannel < ApplicationCable::Channel
  # Channels are long-lived

  # The subscribed method defines where the messages are coming from when someone subscribes to this channel
  def subscribed
    stream_from 'tasks'
    puts "Someone is subscribed to API Tasks channel"
  end

  def speak(data)
    puts data
  end
end
