class CreateExpenses < ActiveRecord::Migration[6.1]
  def change
    create_table :expenses do |t|
      t.string :issuer_name
      t.date :date_issued
      t.string :issuer_rfc
      t.string :cfdi_xml
      t.float :total_amount
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
