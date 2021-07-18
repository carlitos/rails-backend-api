class Expense < ApplicationRecord
  scope :ordered_by_date, -> { order(date_issued: :desc) }
end
