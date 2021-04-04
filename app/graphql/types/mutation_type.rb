module Types
  class MutationType < Types::BaseObject
    field :create_study_plan, mutation: Mutations::CreateStudyPlan
  end
end
