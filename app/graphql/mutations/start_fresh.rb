# frozen_string_literal: true

module Mutations
  class StartFresh < BaseMutation
    type [Types::StudyPlanType]

    argument :id, ID, required: false

    def resolve(id: nil)
      if id
        # refresh specific plan with the id
        [StudyPlan.find(id).start_fresh]
      else
        StudyPlan.all.each(&:start_fresh)
        StudyPlan.all
        # loop through users plans and start fresh on all of them
      end
    end
  end
end
