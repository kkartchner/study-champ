class AddFurthestCompletedPointToStudyPlan < ActiveRecord::Migration[6.0]
  def change
    add_column :study_plans, :furthest_completed_point, :integer
  end
end
