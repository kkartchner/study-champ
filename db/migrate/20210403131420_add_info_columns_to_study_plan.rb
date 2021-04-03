class AddInfoColumnsToStudyPlan < ActiveRecord::Migration[6.0]
  def change
    add_column :study_plans, :total_study_days, :integer
    add_column :study_plans, :whole_points_per_day, :integer
    add_column :study_plans, :extra_points, :integer
    add_column :study_plans, :furthest_completed_point, :integer, default: 0
  end
end
