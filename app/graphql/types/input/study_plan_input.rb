module Types
  module Input
    class StudyPlanInput < Types::BaseInputObject
      argument :title, String, required: false
      argument :points, Integer, required: false
      argument :study_days_string, Types::BitType, required: false
      argument :start_date, GraphQL::Types::ISO8601Date, required: false
      argument :end_date, GraphQL::Types::ISO8601Date, required: false
    end
  end
end
