# frozen_string_literal: true

class CreateStudyPlans < ActiveRecord::Migration[6.0]
  def change
    create_table :study_plans do |t|
      t.string :title, limit: 50
      t.integer :points
      t.column :study_days_string, 'bit(7)'
      t.date :start_date
      t.date :end_date

      t.timestamps
    end
  end
end
