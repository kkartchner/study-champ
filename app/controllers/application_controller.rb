# frozen_string_literal: true

class ApplicationController < ActionController::API
  def find_resource(_id, &callback)
    # Api::V1::StudyPlansController => StudyPlan
    model = self.class.name.gsub(/(Api::V1::)|(sController)/,'').constantize
    record = model.find(params[:id])
    callback.call(record)
  rescue StandardError => e
    render json: { status: 'ERROR', message: e.message }, status: :not_found
  end
end
