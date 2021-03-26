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
          render json: { status: 'SUCCESS', message: 'Study plan created', data: study_plan },
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

      def find_resource(_id, &callback)
        study_plan = StudyPlan.find(params[:id])
        callback.call(study_plan)
      rescue StandardError
        render json: { status: 'ERROR', message: 'Resource not found' }, status: :not_found
      end
    end
  end
end
