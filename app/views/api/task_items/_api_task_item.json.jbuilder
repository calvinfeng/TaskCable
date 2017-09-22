json.extract! api_task_item, :id, :summary, :completed, :created_at, :updated_at
json.url api_task_item_url(api_task_item, format: :json)
