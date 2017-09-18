class Api::Task < ApplicationRecord
  after_initialize :init
  after_save :broadcast_save
  after_destroy :broadcast_delete

  # We want to broadcast an event every time a new task gets created, saved and deleted.
  # So we want to do an after_save and after_destroy

  def init
    self.completed ||= false
  end

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
end
