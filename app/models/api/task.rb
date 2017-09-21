require 'byebug'
class Api::Task < ApplicationRecord
  after_initialize :init
  after_update :broadcast_update
  after_create :broadcast_create
  after_destroy :broadcast_delete

  # We want to broadcast an event every time a new task gets created, saved and deleted.
  # So we want to do an after_create and after_destroy

  def init
    self.completed ||= false
  end

  def broadcast_create
    ActionCable.server.broadcast 'tasks',
      status: 'created',
      id: id,
      title: title,
      description: description,
      completed: completed,
      created_at: created_at,
      updated_at: updated_at
  end

  def broadcast_delete
    ActionCable.server.broadcast 'tasks',
      status: 'deleted',
      id: id
  end

  def broadcast_update
    ActionCable.server.broadcast 'tasks',
      status: 'updated',
      id: id,
      title: title,
      description: description,
      completed: completed,
      created_at: created_at,
      updated_at: updated_at
  end
end
