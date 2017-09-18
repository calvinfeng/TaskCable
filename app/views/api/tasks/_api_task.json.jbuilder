json.extract! api_task, :id, :title, :description, :completed, :created_at, :updated_at
json.url api_task_url(api_task, format: :json)
