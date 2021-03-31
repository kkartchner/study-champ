# frozen_string_literal: true

module Api
  module V1
    class StudyPlansController < ApplicationController
      def index
        study_plans = StudyPlan.order('created_at DESC')
        render json: { status: 'SUCCESS', message: 'Study plans loaded', data: study_plans },
               status: :ok
      end

      def show
        find_resource(params[:id]) do |study_plan|
          render json: { status: 'SUCCESS', message: 'Study plan loaded', data: study_plan },
                 status: :ok
        end
      end

      def create
        study_plan = StudyPlan.new(study_plan_params)

        if study_plan.save

          # TODO: incorporate a translator so api returns data in camelCase
          render json: { status: 'SUCCESS', message: 'Study plan created',
                         data: { **study_plan.attributes,
                           study_info: { total_study_days: study_plan.total_study_days,
                                         whole_points_per_day: study_plan.whole_points_per_day,
                                         extra_points: study_plan.extra_points },
                           study_tasks: study_plan.study_tasks } },
                 status: :ok
        else
          render json: { status: 'ERROR', message: 'Study plan not saved',
                         data: study_plan.errors }, status: :unprocessable_entity
        end
      end

      def update
        find_resource(params[:id]) do |study_plan|
          if study_plan.update(study_plan_params)
            render json: { status: 'SUCCESS', message: 'Study plan updated', data: study_plan },
                   status: :ok
          else
            render json: { status: 'ERROR', message: 'Study plan not updated', data: study_plan },
                   status: :unprocessable_entity
          end
        end
      end

      def destroy
        find_resource(params[:id]) do |study_plan|
          study_plan.destroy
          render json: { status: 'SUCCESS', message: 'Study plan deleted', data: study_plan },
                 status: :ok
        end
      end

      private

      def study_plan_params
        params.permit(:title, :points, :study_days_string, :start_date, :end_date)
      end
    end
  end
end
