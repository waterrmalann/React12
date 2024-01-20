import './ExpenseCard.css';
import { FaMoneyBill } from 'react-icons/fa';

const ExpenseList = ({ transactions }) => {
    return (
        <>
            <h5>All Transactions</h5>
            { transactions.map(transaction => (
                <div key={transaction.id} className="expense-item">
                    <div className="expense-item-head">
                        <div className="expense-item-icon">
                            <FaMoneyBill />
                        </div>
                        <div className="expense-item-body">
                            <h3>{transaction.title}</h3>
                            <p>{transaction.description}</p>
                        </div>
                    </div>
                    <div className="expense-item-price">
                        <h4 style={{color: transaction.isExpense ? 'darkred' : 'gray'}}>${transaction.amount}</h4>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ExpenseList