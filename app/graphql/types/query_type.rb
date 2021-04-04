module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :study_plans, [StudyPlanType],
          null: false,
          description: 'Get list of all study plans'

    def study_plans
      StudyPlan.order('created_at DESC')
    end

    field :study_tasks, [StudyTaskType],
          null: false,
          description: 'Get list of all study plans'

    def study_tasks
      StudyTask.order(:due_date)
    end
  end
end
