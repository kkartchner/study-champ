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

          ### Autogenerate study tasks ###
          # TODO: pull out/modify logic so it first overwrites existing tasks (in the case of
          # the "start fresh" button)
          if study_plan.start_date.present? && study_plan.end_date.present?
            # TODO: make total_study_days utilize the study days string
            total_study_days = (study_plan.end_date - study_plan.start_date).to_i
            whole_points_per_day = study_plan.points / total_study_days
            extra_points = study_plan.points % total_study_days

            cur_point = 1
            total_study_days.times do |day_num|
              points_to_achieve = whole_points_per_day
              if extra_points > 0
                points_to_achieve += 1
                extra_points -= 1
              end

              end_point = cur_point + points_to_achieve - 1
              # creates a study task with current point range
              study_plan.study_tasks.create({ start_point: cur_point,
                                              end_point: end_point,
                                              is_complete: 0,
                                              due_date: study_plan.start_date + day_num })
              # TODO: create subtasks that are tied to the study task (if applicable)

              cur_point = end_point + 1
            end

          end

          # TODO: incorporate a translator so api returns data in camelCase
          render json: { status: 'SUCCESS', message: 'Study plan created',
                         data: { **study_plan.attributes,
                           total_study_days: total_study_days,
                           whole_points_per_day: whole_points_per_day,
                           extra_points: study_plan.points % total_study_days,
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

      def find_resource(_id, &callback)
        study_plan = StudyPlan.find(params[:id])
        callback.call(study_plan)
      rescue StandardError
        render json: { status: 'ERROR', message: 'Resource not found' }, status: :not_found
      end
    end
  end
end
