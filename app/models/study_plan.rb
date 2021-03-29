# frozen_string_literal: true

class StudyPlan < ApplicationRecord
  has_many :study_tasks
  after_save :generate_tasks

  def total_study_days
    study_tasks.count
  end

  def whole_points_per_day
    points / total_study_days
  end

  def extra_points
    points % total_study_days
  end

  def generate_tasks
    return if start_date.blank? || end_date.blank?

    ### Autogenerate study tasks ###
    # TODO: pull out/modify logic so it first overwrites existing tasks (in the case of
    # the "start fresh" button)

    days = %w[sun mon tue wed thu fri sat]

    ## convert study days string to work week days
    # e.g. # '0111111' => ['mon', 'tue', 'wed', 'thu', 'fri', 'sat']
    # "0101010" => ['mon', 'wed', 'fri']
    work_week_days = study_days_string.split('').enum_for(:each_with_index)
                                      .map { |d, index| d.to_i == 1 ? days[index] : nil }
                                      .compact

    BusinessTime::Config.work_week = work_week_days
    study_dates = start_date.business_dates_until(end_date + 1.day)
    total_study_days = study_dates.length

    whole_points_per_day = points / total_study_days
    extra_points = points % total_study_days

    cur_point = 1
    study_dates.each do |date|
      points_to_achieve = whole_points_per_day
      if extra_points.positive?
        points_to_achieve += 1
        extra_points -= 1
      end

      end_point = cur_point + points_to_achieve - 1
      # creates a study task with current point range
      study_tasks.create({ start_point: cur_point,
                           end_point: end_point,
                           is_complete: 0,
                           due_date: date })

      cur_point = end_point + 1

      # TODO: create subtasks that are tied to the study task (if applicable)
    end
  end
end
