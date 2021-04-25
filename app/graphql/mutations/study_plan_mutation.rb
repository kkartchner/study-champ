# frozen_string_literal: true

module Mutations
  class StudyPlanMutation < BaseMutation
    type Types::StudyPlanType

    argument :id, Integer, required: false
    argument :title, String, required: false
    argument :points, Integer, required: false
    argument :study_days_string, String, required: false
    argument :start_date, GraphQL::Types::ISO8601Date, required: false
    argument :end_date, GraphQL::Types::ISO8601Date, required: false

    def resolve(id: nil, title: nil, points: nil, study_days_string: '0000000',
                start_date: nil, end_date: nil)
      if id
        study_plan = StudyPlan.find(id)
        if study_plan.update!({ title: title, points: points, study_days_string: study_days_string, start_date: start_date,
                                end_date: end_date })
          study_plan
        end
      else
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
end
