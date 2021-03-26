# frozen_string_literal: true

Rails.application.routes.draw do
  namespace 'api' do
    namespace 'v1' do
      resources :study_plans
      resources :study_tasks
    end
  end
end
