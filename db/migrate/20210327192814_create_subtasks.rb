class CreateSubtasks < ActiveRecord::Migration[6.0]
  def change
    create_table :subtasks do |t|
      t.references :study_task, null: false, foreign_key: true
      t.integer :point
      t.bit :is_complete

      t.timestamps
    end
  end
end
