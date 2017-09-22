class Api::TaskItem < ApplicationRecord
  after_initialize :init
  after_create :broadcast_create

  belongs_to :task,
  primary_key: :id,
  foreign_key: :task_id,
  class_name: :Task

  def init
    self.completed ||= false
    self.task_id = 1
  end

  def broadcast_create
    ActionCable.server.broadcast 'tasks',
      status: 'task_item_created',
      id: id,
      summary: summary,
      completed: completed,
      task_id: task_id,
      created_at: created_at,
      updated_at: updated_at
  end
end
