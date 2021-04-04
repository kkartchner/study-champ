# frozen_string_literal: true

module Types
  class StudyTaskType < Types::BaseObject
    field :id, ID, null: false
    field :start_point, Integer, null: true
    field :end_point, Integer, null: true
    field :due_date, GraphQL::Types::ISO8601Date, null: true
    field :is_complete, Boolean, null: true, method: :complete?
    field :study_plan_id, Integer, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :study_plan, StudyPlanType, null: false
  end
end
