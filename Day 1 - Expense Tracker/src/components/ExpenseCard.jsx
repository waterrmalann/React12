import './ExpenseCard.css';

const ExpenseCard = ({ totalIncome, totalExpenses }) => {
  return (
    <div className="expense-card">
        <div>
          <h1>$ {totalIncome}</h1>
          <h1>$ {totalIncome - totalExpenses}</h1>
          <h1>$ {totalExpenses}</h1>
        </div>
    </div>
  )
}

export default ExpenseCard;