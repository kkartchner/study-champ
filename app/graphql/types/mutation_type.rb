# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    field :start_fresh, mutation: Mutations::StartFresh
    field :update_study_task, mutation: Mutations::UpdateStudyTask
    field :create_study_plan, mutation: Mutations::CreateStudyPlan
  end
end
