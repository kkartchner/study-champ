# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_04_03_131420) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "study_plans", force: :cascade do |t|
    t.string "title", limit: 50
    t.integer "points"
    t.bit "study_days_string", limit: 7
    t.date "start_date"
    t.date "end_date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "furthest_completed_point", default: 0
    t.integer "total_study_days"
    t.integer "whole_points_per_day"
    t.integer "extra_points"
  end

  create_table "study_tasks", force: :cascade do |t|
    t.integer "start_point"
    t.integer "end_point"
    t.date "due_date"
    t.bit "is_complete", limit: 1
    t.bigint "study_plan_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["study_plan_id"], name: "index_study_tasks_on_study_plan_id"
  end

  create_table "subtasks", force: :cascade do |t|
    t.bigint "study_task_id", null: false
    t.integer "point"
    t.bit "is_complete", limit: 1
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["study_task_id"], name: "index_subtasks_on_study_task_id"
  end

  add_foreign_key "study_tasks", "study_plans"
  add_foreign_key "subtasks", "study_tasks"
end
