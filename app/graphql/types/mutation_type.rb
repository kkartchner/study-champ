# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    field :start_fresh, mutation: Mutations::StartFresh
    field :update_study_task, mutation: Mutations::UpdateStudyTask
    field :study_plan, mutation: Mutations::StudyPlanMutation
    field :delete_study_plan, mutation: Mutations::DeleteStudyPlan
  end
end
