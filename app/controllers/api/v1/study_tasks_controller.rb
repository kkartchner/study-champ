# frozen_string_literal: true

module Api
  module V1
    class StudyTasksController < ApplicationController
      def index
        study_tasks = StudyTask.order('created_at DESC')
        render json: { status: 'SUCCESS', message: 'Study tasks loaded', data: study_tasks },
               status: :ok
      end

      def show
        find_resource(params[:id]) do |study_task|
          render json: { status: 'SUCCESS', message: 'Study task loaded', data: study_task },
                 status: :ok
        end
      end

      def create
        study_task = StudyTask.new(study_task_params)

        if study_task.save
          render json: { status: 'SUCCESS', message: 'Study task created', data: study_task },
                 status: :ok
        else
          render json: { status: 'ERROR', message: 'Study task not saved',
                         data: study_task.errors }, status: :unprocessable_entity
        end
      end

      def update
        find_resource(params[:id]) do |study_task|
          if study_task.update(study_task_params)
            furthest_completed_point = study_task.study_plan.furthest_completed_point
            is_complete = study_task.is_complete == '1'

            if is_complete && study_task.end_point > furthest_completed_point
              furthest_completed_point = study_task.end_point

            elsif !is_complete && study_task.end_point == furthest_completed_point
              # no longer the furthest, so update to next furthest point
              furthest_completed_point = StudyTask.where(is_complete: 1).order(:end_point)
                                                  .last&.end_point || 0
            end

            study_task.study_plan.update({ furthest_completed_point: furthest_completed_point })

            render json: { status: 'SUCCESS', message: 'Study task updated', data: study_task },
                   status: :ok
          else
            render json: { status: 'ERROR', message: 'Study task not updated', data: study_task },
                   status: :unprocessable_entity
          end
        end
      end

      def destroy
        find_resource(params[:id]) do |study_task|
          study_task.destroy
          render json: { status: 'SUCCESS', message: 'Study task deleted', data: study_task },
                 status: :ok
        end
      end

      private

      def study_task_params
        params.permit(:start_point, :end_point, :due_date, :study_plan_id, :is_complete)
      end
    end
  end
end
