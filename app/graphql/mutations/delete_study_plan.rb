module Mutations
  class DeleteStudyPlan < BaseMutation
    type Types::StudyPlanType

    argument :id, ID, required: true

    def resolve(id:)
      StudyPlan.find(id).destroy
    end
  end
end
