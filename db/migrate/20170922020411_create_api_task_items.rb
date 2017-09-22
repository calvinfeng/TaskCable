class CreateApiTaskItems < ActiveRecord::Migration[5.1]
  def change
    create_table :api_task_items do |t|
      t.text :summary
      t.boolean :completed
      t.integer :task_id

      t.timestamps
    end

    add_index :api_task_items, :task_id
  end
end
