# frozen_string_literal: true

module Mutations
  class CreateStudyPlan < BaseMutation
    type Types::StudyPlanType

    argument :title, String, required: false
    argument :points, Integer, required: false
    argument :study_days_string, String, required: false
    argument :start_date, GraphQL::Types::ISO8601Date, required: false
    argument :end_date, GraphQL::Types::ISO8601Date, required: false

    def resolve(title: nil, points: nil, study_days_string: '0000000',
                start_date: nil, end_date: nil)
      StudyPlan.create!({
                          title: title,
                          points: points,
                          study_days_string: study_days_string,
                          start_date: start_date,
                          end_date: end_date
                        })
    end
  end
end
