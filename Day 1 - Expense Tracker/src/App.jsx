import './App.css'
import { Toaster } from 'react-hot-toast';
import ExpenseCard from './components/ExpenseCard';
import ExpenseList from './components/ExpenseList';
import Modal from './components/Modal';
import { useMemo, useState } from 'react';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [transactions, setTransactions] = useState([]);

  const totalExpenses = useMemo(() => {
    return transactions.reduce((total, curr) => curr.isExpense ? total + curr.amount : total, 0);
  }, [transactions]);

  const totalIncome = useMemo(() => {
    return transactions.reduce((total, curr) => !curr.isExpense ? total + curr.amount : total, 0);
  }, [transactions]);

  function submitTransaction(amount, title, description, isExpense) {
    setTransactions((prev) => 
      [...prev, {id: crypto.randomUUID(), amount, title, description, isExpense}]
    )
  }

  return (
    <>
      <div><Toaster/></div>
      <h1>Expense Tracker</h1>
      <button style={{margin: '1rem'}} onClick={() => setModalOpen(true)}>Add</button>
      <Modal isOpen={isModalOpen} setModalOpen={setModalOpen} submitTransaction={submitTransaction} />
      <ExpenseCard totalIncome={totalIncome} totalExpenses={totalExpenses} />
      <ExpenseList transactions={transactions}/>
    </>
  )
}

export default App
