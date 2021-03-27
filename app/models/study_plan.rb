# frozen_string_literal: true

class StudyPlan < ApplicationRecord
  has_many :study_tasks
end
