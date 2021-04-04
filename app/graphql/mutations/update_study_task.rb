# frozen_string_literal: true

module Mutations
  class UpdateStudyTask < BaseMutation
    type Types::StudyTaskType

    argument :id, ID, required: true
    argument :is_complete, Boolean, required: true

    def resolve(id:, is_complete:)
      study_task = StudyTask.find(id)
      study_task.update({ is_complete: is_complete })

      furthest_completed_point = study_task.study_plan.furthest_completed_point

      if is_complete && study_task.end_point > furthest_completed_point
        furthest_completed_point = study_task.end_point

      elsif !is_complete && study_task.end_point == furthest_completed_point
        # no longer the furthest, so update to next furthest point
        furthest_completed_point = StudyTask.where(is_complete: 1).order(:end_point)
                                            .last&.end_point || 0
      end

      study_task.study_plan.update({ furthest_completed_point: furthest_completed_point })
      study_task
    end
  end
end
