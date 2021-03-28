FactoryBot.define do
  factory :study_plan do
    title { FFaker::Book.title }
    points { rand(100..500) }
    study_days_string { 
      rand_string = ''
      7.times { rand_string += %w[0 1].sample }
      rand_string
    }
    start_date { DateTime.now }
    end_date { DateTime.now + 3.months }
  end
end