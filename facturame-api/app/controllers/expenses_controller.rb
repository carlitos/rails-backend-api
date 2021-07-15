class ExpensesController < ApplicationController

  def index
    render json: Expense.all, each_serializer: ExpenseSerializer, root: false
  end

  def new
    @expense = Expense.new
  end

  def create
    @expense = Expense.new( expense_params )
    @expense.save
    render(
          json: ExpenseSerializer.new(@expense).to_json,
          status: 201,
          location: expense_path(@expense.id)
    )
  end

  private

  def expense_params
      params.require(:expense).permit(:issuer_name, :date_issued, :issuer_rfc, :cfdi_xml, :total_amount, :user_id )
  end


end
