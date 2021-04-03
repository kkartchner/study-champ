# frozen_string_literal: true

class StudyPlan < ApplicationRecord
  has_many :study_tasks, dependent: :delete_all
  after_create :generate_tasks

  DAYS = %w[sun mon tue wed thu fri sat]

  def get_study_days
    ## convert study days string to work week days
    # e.g. # '0111111' => ['mon', 'tue', 'wed', 'thu', 'fri', 'sat']
    # "0101010" => ['mon', 'wed', 'fri']
    study_days_string.split('').enum_for(:each_with_index)
                     .map { |d, index| d.to_i == 1 ? DAYS[index] : nil }
                     .compact
  end

  def remaining_points
    points - furthest_completed_point
  end

  def generate_tasks(start_fresh = false)
    return if start_date.blank? || end_date.blank?

    BusinessTime::Config.work_week = get_study_days

    begin_date = start_fresh ? DateTime.now : start_date
    study_dates = begin_date.business_dates_until(end_date + 1.day)
    total_study_days = study_dates.length

    return unless total_study_days.positive?

    whole_points_per_day = remaining_points / total_study_days
    extra_points = remaining_points % total_study_days

    cur_point = furthest_completed_point + 1
    task_ids_to_update = study_tasks.where('end_point > ?', cur_point)
                                    .order(:id).pluck(:id)

    study_dates.each do |date|
      points_to_achieve = whole_points_per_day
      if extra_points.positive?
        points_to_achieve += 1
        extra_points -= 1
      end

      end_point = cur_point + points_to_achieve - 1
      task_id = task_ids_to_update.shift
      if task_id
        # update an existing study task
        study_tasks.find(task_id)
                   .update_columns(
                     { start_point: cur_point,
                       end_point: end_point,
                       is_complete: 0,
                       due_date: date }
                   )
      else
        # create a new study task
        study_tasks.create({ start_point: cur_point,
                             end_point: end_point,
                             is_complete: 0,
                             due_date: date })

      end

      cur_point = end_point + 1

      # TODO: create subtasks that are tied to the study task (if applicable)
    end

    # destroy remaining study tasks that are no longer needed
    study_tasks.where(id: task_ids_to_update).destroy_all if task_ids_to_update.present?

    update_columns(total_study_days: total_study_days, whole_points_per_day: whole_points_per_day,
                   extra_points: extra_points)
  end

  def start_fresh
    generate_tasks(true)
  end
end
