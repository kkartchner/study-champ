# frozen_string_literal: true

Rails.application.routes.draw do
  post "/graphql", to: "graphql#execute"
  mount GraphiQL::Rails::Engine, at: '/graphiql', graphql_path: 'graphql#execute' if Rails.env.development?
  post '/graphql', to: 'graphql#execute'
  # namespace 'api' do
  #   namespace 'v1' do
  #     resources :study_plans
  #     post '/study_plans/start_fresh', to: 'study_plans#start_fresh'
  #     resources :study_tasks
  #     resources :subtasks
  #   end
  # end
end
