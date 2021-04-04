# frozen_string_literal: true

class StudyTask < ApplicationRecord
  belongs_to :study_plan

  def is_complete=(value)
    convert = {
      true => 1,
      false => 0
    }
    super(convert[value])
  end

  def complete?
    is_complete == '1'
  end
end
