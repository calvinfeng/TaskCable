class CreateApiTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :api_tasks do |t|
      t.string :title
      t.text :description
      t.boolean :completed

      t.timestamps
    end
  end
end
