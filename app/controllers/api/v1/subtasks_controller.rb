# frozen_string_literal: true

module Api
  module V1
    class SubtasksController < ApplicationController
      def index
        subtasks = Subtask.order('created_at DESC')
        render json: { status: 'SUCCESS', message: 'Sub tasks loaded', data: subtasks },
               status: :ok
      end

      def show
        find_resource(params[:id]) do |subtask|
          render json: { status: 'SUCCESS', message: 'Sub task loaded', data: subtask },
                 status: :ok
        end
      end

      def create
        subtask = Subtask.new(subtask_params)

        if subtask.save
          render json: { status: 'SUCCESS', message: 'Sub task created', data: subtask },
                 status: :ok
        else
          render json: { status: 'ERROR', message: 'Sub task not saved',
                         data: subtask.errors }, status: :unprocessable_entity
        end
      end

      def update
        find_resource(params[:id]) do |subtask|
          if subtask.update(subtask_params)
            render json: { status: 'SUCCESS', message: 'Sub task updated', data: subtask },
                   status: :ok
          else
            render json: { status: 'ERROR', message: 'Sub task not updated', data: subtask },
                   status: :unprocessable_entity
          end
        end
      end

      def destroy
        find_resource(params[:id]) do |subtask|
          subtask.destroy
          render json: { status: 'SUCCESS', message: 'Sub task deleted', data: subtask },
                 status: :ok
        end
      end

      private

      def subtask_params
        params.permit(:study_task_id, :point)
      end
    end
  end
end
