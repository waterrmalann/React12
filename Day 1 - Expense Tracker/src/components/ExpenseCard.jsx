import './ExpenseCard.css';

const ExpenseCard = ({ totalIncome, totalExpenses }) => {
  return (
    <div className="expense-card">
        <div>
          <div>
            <p>Income</p>
            <h1>$ {totalIncome}</h1>
          </div>
          <div>
            <p>Balance</p>
            <h1>$ {totalIncome - totalExpenses}</h1>
          </div>
          <div>
            <p>Expense</p>
            <h1>$ {totalExpenses}</h1>
          </div>
        </div>
    </div>
  )
}

export default ExpenseCard;