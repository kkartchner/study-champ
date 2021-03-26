class CreateStudyTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :study_tasks do |t|
      t.integer :start_point
      t.integer :end_point
      t.date :due_date
      t.bit :is_complete
      t.references :study_plan, null: false, foreign_key: true

      t.timestamps
    end
  end
end
