class TasksChannel < ApplicationCable::Channel
  # The subscribed method defines where the messages are coming from when someone subscribes to this channel
  def subscribed
    stream_from 'tasks'
    puts "Someone is subscribed to API Tasks channel"
  end
end
