# frozen_string_literal: true

class StudyPlan < ApplicationRecord
  has_many :study_tasks
  # after_save :generate_tasks

  def generate_tasks
    ### Autogenerate study tasks ###
    # TODO: pull out/modify logic so it first overwrites existing tasks (in the case of
    # the "start fresh" button)
    if start_date.present? && end_date.present?
      # TODO: make total_study_days utilize the study days string
      total_study_days = (end_date - start_date).to_i
      whole_points_per_day = points / total_study_days
      extra_points = points % total_study_days

      cur_point = 1
      total_study_days.times do |day_num|
        points_to_achieve = whole_points_per_day
        if extra_points > 0
          points_to_achieve += 1
          extra_points -= 1
        end

        end_point = cur_point + points_to_achieve - 1
        # creates a study task with current point range
        study_tasks.create({ start_point: cur_point,
                             end_point: end_point,
                             is_complete: 0,
                             due_date: start_date + day_num })
        # TODO: create subtasks that are tied to the study task (if applicable)

        cur_point = end_point + 1
      end
    end
  end
end
