class ExpenseSerializer < ActiveModel::Serializer

  attributes :id, :issuer_name, :date_issued, :issuer_rfc, :cfdi_xml, :total_amount, :user_id

end
