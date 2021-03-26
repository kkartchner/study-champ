# frozen_string_literal: true

require 'date'
require 'ffaker'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
3.times do
  rand_string = ''
  7.times { rand_string += %w[0 1].sample }
  StudyPlan.create({ title: FFaker::Book.title,
                     points: rand(100..500),
                     study_days_string: rand_string,
                     start_date: DateTime.now,
                     end_date: DateTime.now + 3.months })
end
