module Types
  class StudyPlanType < Types::BaseObject
    field :id, ID, null: false, description: 'An example field added by the generator'
    field :title, String, null: true
    field :points, Integer, null: true
    field :study_days_string, String, null: true
    field :start_date, GraphQL::Types::ISO8601Date, null: true
    field :end_date, GraphQL::Types::ISO8601Date, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :furthest_completed_point, Integer, null: true
    field :total_study_days, Integer, null: true
    field :whole_points_per_day, Integer, null: true
    field :extra_points, Integer, null: true
  end
end
